function convertStepToLayout(step) {
  if (!step || !step.type) {
    throw new Error('Missing step type');
  }

  switch (step.type) {
    case 'final':
      return convertFinalStepToDynamicLayout(step);
    case 'decision':
      return convertDecisionStepToDynamicLayout(step);
    case 'form':
      return convertFormStepToDynamicLayout(step);
    default:
      throw new Error('invalid step type');
  }
}

function convertCommonComponents(step) {
  const layout = [];

  if (step.title) {
    layout.push(convertStepTitleToDynamicHeading(step.title));
  }
  if (step.image) {
    const image = convertStepImageToDynamicImage(step.image);
    layout.push(dynamicBox([image], 'sm'));
  }
  if (step.description) {
    layout.push(convertStepDescriptionToDynamicParagraph(step.description));
  }

  return layout;
}

function convertFormStepToDynamicLayout(step) {
  const layout = convertCommonComponents(step);

  if (step.reviewFields) {
    layout.push(convertStepReviewToDynamicReview(step.reviewFields));
  }

  if (step.schemas) {
    layout.push(...getSchemaLayout(step));
  }

  if (step.actions) {
    const actions = step.actions.map(convertStepActionToDynamicAction);
    layout.push(dynamicBox(actions, 'md'));
  }

  return layout;
}

function convertFinalStepToDynamicLayout(step) {
  const layout = convertCommonComponents(step);

  if (step.action) {
    const actions = [convertStepActionToDynamicAction(step.action)];
    layout.push(dynamicBox(actions, 'md'));
  }

  return layout;
}

function convertDecisionStepToDynamicLayout(step) {
  const layout = convertCommonComponents(step);

  if (step.options) {
    layout.push(convertStepDecisionToDynamicDecision(step.options));
  }

  return layout;
}

function dynamicBox(components, size) {
  return {
    type: 'box',
    width: size || 'md',
    components,
  };
}

function convertStepTitleToDynamicHeading(title) {
  return {
    type: 'heading',
    text: title,
    size: 'lg',
    margin: 'lg',
    align: 'center',
  };
}

function convertStepDescriptionToDynamicParagraph(description) {
  return {
    type: 'paragraph',
    text: description,
    align: 'center',
  };
}

function convertStepSchemaToDynamicForm(schema, model) {
  return {
    type: 'form',
    schema,
    model,
  };
}

function convertStepDecisionToDynamicDecision(options) {
  return {
    type: 'decision',
    options: options.map(convertStepDecisionOption),
  };
}

function convertStepDecisionOption(option) {
  return {
    text: option.description,
    action: {
      label: option.title,
      method: 'GET',
      url: option.url,
      disabled: option.disabled,
    },
  };
}

function convertStepImageToDynamicImage(url) {
  return {
    type: 'image',
    url,
    margin: 'lg',
  };
}

function convertStepActionToDynamicAction(action) {
  const newAction = { ...action, label: action.title };
  delete newAction.type;
  delete newAction.title;
  return {
    type: 'button',
    context: action.type,
    action: newAction,
  };
}

function convertStepReviewToDynamicReview(reviewFields) {
  return {
    type: 'review',
    text: reviewFields.title,
    definitions: reviewFields.fields.map(convertReviewFieldToDefinition),
  };
}

function convertReviewFieldToDefinition(reviewField) {
  return {
    label: reviewField.title,
    value: reviewField.value,
  };
}

function getSchemaLayout(step) {
  const layout = [];

  if (step.schemas && step.schemas[0]) {
    const schema = step.schemas[0];
    const dynamicForm = convertStepSchemaToDynamicForm(schema, step.model);
    if (isWideForm(schema)) {
      layout.push(dynamicForm);
    } else {
      layout.push(dynamicBox([dynamicForm], 'md'));
    }
  }

  return layout;
}

function isWideForm() {
  // For the time being we won't support automatically widening forms
  // Unlike it V2, there is no way to easily iterate and identify narrow fields
  return false;
}

function inlineReferences(layout, schemas, actions, model) {
  if (!layout) {
    return [];
  }
  if (!schemas) {
    return layout;
  }

  return layout.map((component) => {
    if (component.type === 'form') {
      return inlineFormSchema(component, schemas, model);
    }

    if (component.type === 'action') {
      return inlineAction(component, actions);
    }

    if (component.type === 'box') {
      return inlineBoxFormSchemas(component, schemas, actions, model);
    }

    if (component.type === 'columns') {
      return inlineColumnsFormSchemas(component, schemas, actions, model);
    }

    return component;
  });
}

function inlineFormSchema(formComponent, schemas, model) {
  if (formComponent.schema.$ref) {
    const newForm = {
      ...formComponent,
      schema: getSchemaById(schemas, formComponent.schema.$ref),
      model,
    };
    delete newForm.schema.$ref;
    return newForm;
  }
  return { ...formComponent, model };
}

function inlineAction(actionComponent, actions) {
  if (actionComponent.$ref) {
    const newAction = getActionById(actions, actionComponent.$ref);
    delete newAction.$ref;
    return convertStepActionToDynamicAction(newAction);
  }

  return actionComponent;
}

function inlineBoxFormSchemas(boxComponent, schemas, actions, model) {
  return {
    ...boxComponent,
    components: inlineReferences(boxComponent.components, schemas, actions, model),
  };
}

function inlineColumnsFormSchemas(columnsComponent, schemas, actions, model) {
  return {
    ...columnsComponent,
    left: inlineReferences(columnsComponent.left, schemas, actions, model),
    right: inlineReferences(columnsComponent.right, schemas, actions, model),
  };
}

function getSchemaById(schemas, id) {
  return schemas.find((schema) => schema.$id === id);
}

function getActionById(actions, id) {
  return actions.find((action) => action.$id === id);
}

export { convertStepToLayout, inlineReferences };
