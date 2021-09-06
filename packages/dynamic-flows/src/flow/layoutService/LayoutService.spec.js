import { convertStepToLayout, inlineReferences } from '.';

describe('Given a utility service for handling dynamic layouts', () => {
  describe('when we receive a decision step', () => {
    it('should convert it into a layout', () => {
      const option1 = {
        title: 'Thing one',
        description: 'The first type of thing',
        url: 'https://...',
      };

      const option2 = {
        title: 'Thing two',
        url: 'https://...',
        disabled: true,
      };

      const decisionStep = {
        type: 'decision',
        key: 'decide-thing-type',
        title: 'Thing type',
        description: 'Please choose between types of things',
        options: [option1, option2],
      };

      const decisionLayout = [
        {
          type: 'heading',
          text: decisionStep.title,
          size: 'lg',
          margin: 'lg',
          align: 'center',
        },
        {
          type: 'paragraph',
          text: decisionStep.description,
          align: 'center',
        },
        {
          type: 'decision',
          options: [
            {
              text: option1.description,
              action: {
                disabled: undefined,
                title: option1.title,
                method: 'GET',
                url: option1.url,
              },
            },
            {
              text: undefined,
              action: {
                title: option2.title,
                method: 'GET',
                url: option2.url,
                disabled: true,
              },
            },
          ],
        },
      ];

      expect(convertStepToLayout(decisionStep)).toStrictEqual(decisionLayout);
    });
  });

  describe('when we receive a final step', () => {
    it('should convert it into a layout', () => {
      const exitAction = {
        title: 'Exit',
        type: 'success',
        exit: true,
        result: { someKey: 'some value' },
      };

      const finalStep = {
        type: 'final',
        key: 'thing-final',
        details: {
          title: 'We create the thing!',
          description: 'You now do stuff with the thing',
          image: '/images/1234.png',
        },
        actions: [exitAction],
        success: true,
      };

      const finalLayout = [
        {
          type: 'heading',
          text: 'We create the thing!',
          size: 'lg',
          margin: 'lg',
          align: 'center',
        },
        {
          type: 'box',
          width: 'sm',
          components: [
            {
              type: 'image',
              url: '/images/1234.png',
              margin: 'lg',
              text: undefined,
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'You now do stuff with the thing',
          align: 'center',
        },
        {
          type: 'box',
          width: 'md',
          components: [
            {
              type: 'button',
              context: 'success',
              action: { ...exitAction, type: 'success' },
            },
          ],
        },
      ];

      expect(convertStepToLayout(finalStep)).toStrictEqual(finalLayout);
    });
  });

  describe('when we receive a form step', () => {
    it('should convert it into a layout', () => {
      const schema = {
        $id: 'thing',
        type: 'object',
        properties: {
          a: {
            type: 'integer',
          },
          b: {
            type: 'string',
          },
        },
      };

      const submitAction = {
        title: 'Submit',
        type: 'primary',
        url: '/things',
        method: 'POST',
      };

      const cancelAction = {
        title: 'Cancel',
        type: 'delete',
        exit: true,
      };

      const reviewFields = {
        title: 'A thing',
        fields: [
          {
            title: 'Label for a',
            value: 'Value of a',
          },
        ],
      };

      const formStep = {
        type: 'form',
        key: 'create-thing',
        title: 'Step 1',
        description: 'Please create a thing',
        refreshFormUrl: '/thing-requirements',
        actions: [submitAction, cancelAction],
        reviewFields,
        schemas: [schema],
      };

      const finalLayout = [
        {
          type: 'heading',
          text: formStep.title,
          size: 'lg',
          margin: 'lg',
          align: 'center',
        },
        {
          type: 'paragraph',
          text: formStep.description,
          align: 'center',
        },
        {
          type: 'review',
          text: reviewFields.title,
          fields: [
            {
              label: reviewFields.fields[0].title,
              value: reviewFields.fields[0].value,
            },
          ],
        },
        {
          type: 'box',
          width: 'md',
          components: [
            {
              model: undefined,
              type: 'form',
              schema,
            },
          ],
        },
        {
          type: 'box',
          width: 'md',
          components: [
            {
              type: 'button',
              context: submitAction.type,
              action: {
                ...submitAction,
                title: submitAction.title,
                type: 'primary',
              },
            },
            {
              type: 'button',
              context: cancelAction.type,
              action: {
                ...cancelAction,
                title: cancelAction.title,
                type: 'delete',
              },
            },
          ],
        },
      ];

      expect(convertStepToLayout(formStep)).toStrictEqual(finalLayout);
    });
  });

  describe('when asked to inline references by id', () => {
    const schemas = [
      {
        $id: '#myDetails',
        type: 'object',
        properties: {
          name: { type: 'string' },
        },
      },
      {
        $id: '#myAddress',
        type: 'object',
        properties: {
          address: { type: 'string' },
        },
      },
    ];

    const actions = [
      {
        $id: '#submitMyDetails',
        title: 'Continue',
        url: '/v3',
        type: 'primary',
        method: 'POST',
        disabled: false,
      },
      {
        $id: '#submitMyAddress',
        title: 'Continue',
        url: '/v3',
        type: 'primary',
        method: 'POST',
        disabled: false,
      },
    ];

    it('should inline schema of top level form components', () => {
      const simpleLayout = [
        {
          type: 'form',
          schema: {
            $ref: '#myDetails',
          },
        },
        {
          type: 'form',
          schema: {
            $ref: '#myAddress',
          },
        },
        {
          type: 'action',
          $ref: '#submitMyDetails',
        },
        {
          type: 'action',
          $ref: '#submitMyAddress',
        },
      ];

      const expected = [
        {
          model: undefined,
          type: 'form',
          schema: {
            $id: '#myDetails',
            type: 'object',
            properties: {
              name: { type: 'string' },
            },
          },
        },
        {
          model: undefined,
          type: 'form',
          schema: {
            $id: '#myAddress',
            type: 'object',
            properties: {
              address: { type: 'string' },
            },
          },
        },
        {
          $ref: '#submitMyDetails',
          type: 'action',
        },
        {
          $ref: '#submitMyAddress',
          type: 'action',
        },
      ];

      expect(inlineReferences(simpleLayout, schemas, actions)).toStrictEqual(expected);
    });

    it('should inline schemas inside boxes', () => {
      const boxLayout = [
        {
          type: 'box',
          components: [
            {
              type: 'form',
              schema: {
                $ref: '#myAddress',
              },
            },
            {
              type: 'action',
              $ref: '#submitMyAddress',
            },
          ],
        },
      ];

      const expected = [
        {
          type: 'box',
          components: [
            {
              model: undefined,
              type: 'form',
              schema: {
                $id: '#myAddress',
                type: 'object',
                properties: {
                  address: { type: 'string' },
                },
              },
            },
            {
              $ref: '#submitMyAddress',
              type: 'action',
            },
          ],
        },
      ];

      expect(inlineReferences(boxLayout, schemas, actions)).toStrictEqual(expected);
    });

    it('should inline schemas inside columns', () => {
      const columnLayout = [
        {
          type: 'columns',
          left: [
            {
              type: 'form',
              schema: {
                $ref: '#myDetails',
              },
            },
            {
              type: 'action',
              $ref: '#submitMyDetails',
            },
          ],
          right: [
            {
              type: 'form',
              schema: {
                $ref: '#myAddress',
              },
            },
            {
              type: 'action',
              $ref: '#submitMyAddress',
            },
          ],
        },
      ];

      const expected = [
        {
          type: 'columns',
          left: [
            {
              model: undefined,
              type: 'form',
              schema: {
                $id: '#myDetails',
                type: 'object',
                properties: {
                  name: { type: 'string' },
                },
              },
            },
            {
              $ref: '#submitMyDetails',
              type: 'action',
            },
          ],
          right: [
            {
              model: undefined,
              type: 'form',
              schema: {
                $id: '#myAddress',
                type: 'object',
                properties: {
                  address: { type: 'string' },
                },
              },
            },
            {
              $ref: '#submitMyAddress',
              type: 'action',
            },
          ],
        },
      ];

      expect(inlineReferences(columnLayout, schemas, actions)).toStrictEqual(expected);
    });
  });

  describe('when asked to inline schemas and there are no schemas', () => {
    const layout = [
      {
        type: 'heading',
        text: 'Title',
      },
      {
        type: 'paragraph',
        text: 'Lorem Ipsum',
      },
    ];

    it('should return the original layout', () => {
      expect(inlineReferences(layout, undefined)).toStrictEqual(layout);
      expect(inlineReferences(layout, [])).toStrictEqual(layout);
    });
  });

  describe('when asked to inline schemas and there is no layout', () => {
    it('should return an empty layout', () => {
      expect(inlineReferences(undefined, undefined)).toStrictEqual([]);
      expect(inlineReferences(undefined, [])).toStrictEqual([]);
    });
  });
});
