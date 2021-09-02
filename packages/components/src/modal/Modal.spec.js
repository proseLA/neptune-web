import { mount } from 'enzyme';

import Modal from './Modal';

jest.useFakeTimers();
jest.mock('../common');

const defaultLocale = 'en-GB';

jest.mock('react-intl', () => ({
  useIntl: () => ({ locale: defaultLocale, formatMessage: (id) => `${id}` }),
  defineMessages: (translations) => translations,
}));

describe('Modal', () => {
  let component;
  beforeEach(() => {
    component = mount(<Modal body="Some body" open onClose={jest.fn()} />);

    jest.clearAllMocks();
  });

  it('has Dimmer with prop open set correctly', () => {
    component.setProps({ open: false });
    expect(dimmer().prop('open')).toBe(false);
    component.setProps({ open: true });
    expect(dimmer().prop('open')).toBe(true);
  });

  describe('renders', () => {
    it('default dialog', () => {
      expect(modal()).toHaveLength(1);
    });

    it('with right size when passed down the props', () => {
      component.setProps({ size: 'sm' });
      expect(modalDialog().hasClass('tw-modal-sm')).toBe(true);
      component.setProps({ size: 'md' });
      expect(modalDialog().hasClass('tw-modal-md')).toBe(true);
      component.setProps({ size: 'lg' });
      expect(modalDialog().hasClass('tw-modal-lg')).toBe(true);
    });

    it('with title when title is provided', () => {
      expect(modalTitle().text()).toBe('');
      component.setProps({ title: 'A title' });

      expect(modalTitle()).toHaveLength(1);
      expect(modalTitle().text()).toBe('A title');
    });

    it('with a custom class if classname is provided', () => {
      component.setProps({ className: 'a-custom-className' });
      expect(modal().hasClass('a-custom-className')).toBe(true);
    });

    it('with some random other props', () => {
      component.setProps({ somerandomprop: 'thing', someotherrandomprop: 'other thing' });

      expect(modal().prop('somerandomprop')).toBe('thing');
      expect(modal().prop('someotherrandomprop')).toBe('other thing');
    });

    it('with body content', () => {
      component.setProps({ body: <p>Some paragraph text</p> });

      expect(modalBody().text()).toBe('Some paragraph text');
    });

    it('with no footer when `footer` not specified as prop', () => {
      component.setProps({ footer: null });
      expect(modalFooter()).toHaveLength(0);
    });

    it('with footer content when `footer` specified as prop', () => {
      component.setProps({ footer: <button type="button">Some button</button> });

      expect(modalFooter()).toHaveLength(1);
    });

    describe('header', () => {
      it('with divider if title is provided', () => {
        expect(modalHeader().hasClass('modal--withoutborder')).toBe(true);
        component.setProps({ title: 'Some title' });
        expect(modalHeader().hasClass('modal--withoutborder')).toBe(false);
      });

      it('with divider if no-Divider class is provided', () => {
        component.setProps({ title: 'Some title' });
        expect(modalHeader().hasClass('modal--withoutborder')).toBe(false);
        component.setProps({ className: 'no-divider' });
        expect(modalHeader().hasClass('modal--withoutborder')).toBe(true);
      });
    });

    describe('content', () => {
      it('with compact class if compact class is provided', () => {
        component.setProps({ className: '' });
        expect(modalContent().hasClass('tw-modal-compact')).toBe(false);
        component.setProps({ className: 'compact' });
        expect(modalContent().hasClass('tw-modal-compact')).toBe(true);
      });

      it('with no title class if title is not provided', () => {
        component.setProps({ title: 'a title' });
        expect(modalContent().hasClass('tw-modal-no-title')).toBe(false);
        component.setProps({ title: '' });
        expect(modalContent().hasClass('tw-modal-no-title')).toBe(true);
      });
    });
  });

  describe('behaviourally', () => {
    let originalAddEventListener;
    let documentEventCallbacks;

    beforeEach(() => {
      originalAddEventListener = global.document.addEventListener;
      documentEventCallbacks = {};
      jest.spyOn(global.document, 'addEventListener').mockImplementation((name, callback) => {
        documentEventCallbacks[name] = callback;
      });
    });

    afterEach(() => {
      global.document.addEventListener = originalAddEventListener;
    });

    it('calls close handler on close button click', () => {
      const onClose = jest.fn();
      component.setProps({ onClose });

      expect(onClose).not.toHaveBeenCalled();
      clickCloseButton();
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('only calls close handler once when setting open to false in onClose handler', () => {
      const onClose = jest.fn(() => {
        component.setProps({ open: false });
      });
      component.setProps({ onClose });
      expect(onClose).not.toHaveBeenCalled();
      clickCloseButton();
      jest.runAllTimers();
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    const clickCloseButton = () => {
      component.find('.close').simulate('click');
    };
  });

  const modal = () => component.find('.tw-modal');
  const modalDialog = () => component.find('.tw-modal-dialog');
  const modalHeader = () => component.find('.tw-modal-header');
  const modalTitle = () => component.find('.tw-modal-title');
  const modalContent = () => component.find('.tw-modal-content');
  const modalBody = () => component.find('.tw-modal-body');
  const modalFooter = () => component.find('.tw-modal-footer');

  // For some reason Dimmer gets rendered as Component so this is the best way I found to access it.
  const dimmer = () => component.at(0);
});
