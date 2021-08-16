/**
 * @jest-environment node
 */
import { renderToString } from 'react-dom/server';

import en from './i18n/en.json';

import * as exposedLibraryItems from '.';

const excluded = new Set([
  // hooks
  'useSnackbar',

  // specific components
  'Provider',
  'BottomSheet',

  // enums
  'Size',
  'Width',
  'Sentiment',
  'Priority',
  'ControlType',
  'Type',
  'Theme',
  'DateMode',
  'MonthFormat',
  'Position',
  'Scroll',
  'ProfileType',
  'Breakpoint',
  'Layout',
  'Status',
  'MarkdownNodeType',
  'AvatarType',
  'InfoPresentation',
  'UploadStep',
  'DecisionPresentation',
  'DecisionType',
  'AlertArrowPosition',
  'LogoType',
  'FileType',

  // types
  'UploadedFile',
  'UploadError',
  'UploadResponse',

  // utils
  'SUPPORTED_LANGUAGES',
  'DEFAULT_LANG',
  'DEFAULT_LOCALE',
  'adjustLocale',
  'getLangFromLocale',
  'getCountryFromLocale',

  // other
  'translations',
]);

function isNotExcluded(item) {
  return !excluded.has(item);
}

describe('Server side rendering', () => {
  it('can render components', () => {
    const componentNames = Object.keys(exposedLibraryItems).filter(isNotExcluded);
    expect(componentNames.length).toBeGreaterThan(0);

    // stick all possible properties we might need to render all components in here
    const allProps = {
      currencies: [],
      steps: [],
      stepper: {
        steps: [],
      },
      items: [],
      children: 'yo',
      id: '1',
      text: 'test',
      timeout: 0,
      timestamp: 1,
      title: 'trolo',
      name: 'lolo',
      label: 'hello',
      content: 'world',
      currency: 'XYZ',
      amount: 0,
      options: [],
      model: {},
      fields: {},
      media: <h1>Hello</h1>,
      onClick: jest.fn(),
      onChange: jest.fn(),
      status: 'processing',
      size: 'sm',
      body: 'body',
      onClose: jest.fn(),
      onDismiss: jest.fn(),
      onRemove: jest.fn(),
      radios: [
        {
          id: 'id-test-0',
          label: 'Radio1',
        },
        {
          id: 'id-test-0',
          label: 'Radio1',
        },
      ],
      position: 'left',
      open: true,
      tabs: [],
      direction: {
        xs: 'column',
        sm: 'row',
        md: 'column',
        lg: 'row',
      },
      alt: '',
      src: '',
      details: 'yo',
      icon: <svg />,
      badge: <svg />,
      link: 'link',
      href: '#',
      description: 'description',
      'aria-label': 'a label',
      logo: <svg />,
    };

    // Override props in case of name collision.
    const overrideProps = {
      Alert: { children: undefined, message: 'Fluffy kittens', size: undefined },
      Card: { isExpanded: true },
      CheckboxButton: { children: undefined, onChange: jest.fn() },
      Typeahead: { size: 'md' },
      InputWithDisplayFormat: { displayPattern: '**-**' },
      TextareaWithDisplayFormat: { displayPattern: '**-**' },
      Sticky: { position: 'top' },
      MoneyInput: { selectedCurrency: { currency: 'EUR' } },
      Tabs: { selected: 1, onTabSelect: jest.fn() },
      Markdown: { children: '# Markdown string' },
      SnackbarConsumer: {
        children: jest.fn(),
      },
      SnackbarContext: {
        children: jest.fn(),
      },
      Popover: {
        children: <div />,
      },
      Field: {
        model: 'a model',
        type: 'text',
        children: <input />,
      },
      Summary: {
        status: 'done',
        content: undefined,
      },
      Tile: {
        media: <img alt="img" />,
      },
      Modal: { position: 'top' },
      ActionOption: { action: 'hello' },
      DateLookup: { value: new Date() },
      Link: { size: 16 },
    };

    const { Provider } = exposedLibraryItems;
    componentNames.forEach((componentName) => {
      const Component = exposedLibraryItems[componentName];
      const newProps = { ...allProps };

      Object.keys(overrideProps[componentName] || {}).forEach((propertyToOverrideKey) => {
        newProps[propertyToOverrideKey] = overrideProps[componentName][propertyToOverrideKey];
      });

      const view = renderToString(
        <Provider i18n={{ locale: 'en-GB', messages: en }}>
          {componentName.endsWith('Context') ? (
            <Component.Provider {...newProps} />
          ) : (
            <Component {...newProps} />
          )}
        </Provider>,
      );

      expect(view).toStrictEqual(expect.any(String));
    });
  });
});
