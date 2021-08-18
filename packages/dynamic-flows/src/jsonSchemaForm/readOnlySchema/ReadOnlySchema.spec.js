import { DefinitionList } from '@transferwise/components';
import React from 'react';

import { mount } from '../../test-utils';

import ReadOnlySchema from './ReadOnlySchema';

describe('Given a component for rendering read-only schemas', () => {
  function mountComponent(props) {
    const defaultProps = {
      onChange: jest.fn(),
      onPersistAsync: jest.fn(),
      submitted: false,
    };
    return mount(<ReadOnlySchema {...defaultProps} {...props} />);
  }
  describe('when schema is of basic type', () => {
    describe('when model is not null', () => {
      it('should render a DefinitionList with one title/value', () => {
        const wrapper = mountComponent({
          schema: { readOnly: true, title: 'Some Title', type: 'string' },
          model: 'some value',
        });
        const definitionList = wrapper.find(DefinitionList);
        expect(definitionList.props('definitions').definitions).toMatchObject([
          {
            title: 'Some Title',
            value: 'some value',
          },
        ]);
      });
    });

    describe('when schema type is boolean', () => {
      it('should render a DefinitionList with where the value is "Yes" for "true"', () => {
        const wrapper = mountComponent({
          schema: { readOnly: true, title: 'Some Title', type: 'boolean' },
          model: true,
        });
        const definitionList = wrapper.find(DefinitionList);
        expect(definitionList.props('definitions').definitions).toMatchObject([
          {
            title: 'Some Title',
            value: 'Yes',
          },
        ]);
      });
      it('should render a DefinitionList with where the value is "No" for "false"', () => {
        const wrapper = mountComponent({
          schema: { readOnly: true, title: 'Some Title', type: 'boolean' },
          model: false,
        });
        const definitionList = wrapper.find(DefinitionList);
        expect(definitionList.props('definitions').definitions).toMatchObject([
          {
            title: 'Some Title',
            value: 'No',
          },
        ]);
      });
    });

    describe('when model is null', () => {
      it('should render a DefinitionList with one title/value, where the value is an empty string', () => {
        const wrapper = mountComponent({
          schema: { readOnly: true, title: 'Some Title', type: 'string' },
          model: null,
        });
        const definitionList = wrapper.find(DefinitionList);
        expect(definitionList.props('definitions').definitions).toMatchObject([
          {
            title: 'Some Title',
            value: '',
          },
        ]);
      });
    });
  });

  describe('when schema is oneOf a of basic type using "const"', () => {
    it('displays the value from the selected option, matching by const value, using title and description', () => {
      const wrapper = mountComponent({
        schema: {
          readOnly: true,
          title: 'Currency',
          type: 'string',
          oneOf: [
            {
              title: 'GBP',
              description: 'British pound',
              const: 'GBP',
            },
            {
              title: 'USD',
              description: 'United States dollar',
              const: 'USD',
            },
          ],
        },
        model: 'USD',
      });

      const definitionList = wrapper.find(DefinitionList);
      expect(definitionList.props('definitions').definitions).toMatchObject([
        {
          title: 'Currency',
          value: 'USD - United States dollar',
        },
      ]);
    });
  });
  describe('when schema is oneOf a of basic type using "enum"', () => {
    it('displays the value from the selected option, matching by const value, using title and description', () => {
      const wrapper = mountComponent({
        schema: {
          readOnly: true,
          title: 'Currency',
          type: 'string',
          oneOf: [
            {
              title: 'GBP',
              description: 'British pound',
              enum: ['GBP'],
            },
            {
              title: 'USD',
              description: 'United States dollar',
              enum: ['USD'],
            },
          ],
        },
        model: 'USD',
      });

      const definitionList = wrapper.find(DefinitionList);
      expect(definitionList.props('definitions').definitions).toMatchObject([
        {
          title: 'Currency',
          value: 'USD - United States dollar',
        },
      ]);
    });
  });
});
