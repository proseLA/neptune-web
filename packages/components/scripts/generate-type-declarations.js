const fs = require('fs');

const { generateFromFile } = require('react-to-typescript-definitions');

/**
 * dir where we would place generated `.d.ts` files
 * (same folder as we specifing in `tsconfig.json` via `declarationDir`)
 */
const typesDistFolder = 'build/types';

/**
 * list of JS files that uses prop-types (basically React components)
 * and that are exposed from `@transferwise/components` library
 */
const jsFiles = [
  { filename: 'Provider', folder: 'provider' },
  { filename: 'Checkbox', folder: 'checkbox' },
  { filename: 'CheckboxButton', folder: 'checkboxButton' },
  { filename: 'Radio', folder: 'radio' },
  { filename: 'Select', folder: 'select' },
  { filename: 'MoneyInput', folder: 'moneyInput' },
  { filename: 'Tooltip', folder: 'tooltip' },
  { filename: 'Stepper', folder: 'stepper' },
  { filename: 'FlowNavigation', folder: 'flowNavigation' },
  { filename: 'Popover', folder: 'popover' },
  { filename: 'Money', folder: 'money' },
  { filename: 'Modal', folder: 'modal' },
  { filename: 'RadioOption', folder: 'radioOption' },
  { filename: 'CheckboxOption', folder: 'checkboxOption' },
  { filename: 'NavigationOption', folder: 'navigationOption' },
  { filename: 'NavigationOptionsList', folder: 'navigationOptionsList' },
  { filename: 'DateLookup', folder: 'dateLookup' },
  { filename: 'PhoneNumberInput', folder: 'phoneNumberInput' },
  { filename: 'DateInput', folder: 'dateInput' },
  { filename: 'InstructionsList', folder: 'instructionsList' },
  { filename: 'ProcessIndicator', folder: 'processIndicator' },
  { filename: 'Upload', folder: 'upload' },
  { filename: 'DefinitionList', folder: 'definitionList' },
  { filename: 'DynamicFieldDefinitionList', folder: 'dynamicFieldDefinitionList' },
  { filename: 'Avatar', folder: 'avatar' },
  { filename: 'Button', folder: 'button' },
  { filename: 'CircularButton', folder: 'circularButton' },
  { filename: 'Info', folder: 'info' },
  { filename: 'RadioGroup', folder: 'radioGroup' },
  { filename: 'Alert', folder: 'alert' },
  { filename: 'InputWithDisplayFormat', folder: 'inputWithDisplayFormat' },
  { filename: 'TextareaWithDisplayFormat', folder: 'textareaWithDisplayFormat' },
  { filename: 'Chevron', folder: 'chevron' },
  { filename: 'Accordion', folder: 'accordion' },
  { filename: 'Dimmer', folder: 'dimmer' },
  { filename: 'SlidingPanel', folder: 'slidingPanel' },
  { filename: 'Drawer', folder: 'drawer' },
  { filename: 'Sticky', folder: 'sticky' },
  { filename: 'Typeahead', folder: 'typeahead' },
  { filename: 'Snackbar', folder: 'snackbar' },
  { filename: 'SnackbarProvider', folder: 'snackbar' },
  { filename: 'Tabs', folder: 'tabs' },
  { filename: 'OverlayHeader', folder: 'overlayHeader' },
  { filename: 'Image', folder: 'image' },
  { filename: 'Markdown', folder: 'markdown' },
  { filename: 'Card', folder: 'card' },
  { filename: 'Summary', folder: 'summary' },
  { filename: 'Decision', folder: 'decision' },
  { filename: 'Nudge', folder: 'nudge' },
  { filename: 'InlineAlert', folder: 'inlineAlert' },
  { filename: 'AvatarWrapper', folder: 'avatarWrapper' },
  { filename: 'Logo', folder: 'logo' },
];

jsFiles.forEach(({ filename, folder }) => {
  const filePath = `${folder}/${filename}`;

  // generate types declration content
  let fileTypeDeclrationContent = null;
  try {
    fileTypeDeclrationContent = generateFromFile(null, `src/${filePath}.js`, {
      babylonPlugins: ['optionalChaining', 'nullishCoalescingOperator'],
    });
  } catch (error) {
    /* eslint-disable no-console */
    console.log(`Error while generating types for '${filePath}'`);
    throw error;
  }

  // write content into .d.ts files
  fs.writeFileSync(`${typesDistFolder}/${filePath}.d.ts`, fileTypeDeclrationContent);
});
