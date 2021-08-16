import * as formatting from '@transferwise/formatting';
import { shallow } from 'enzyme';

import Chevron from '../../chevron';
import { fakeKeyDownEventForKey } from '../../common/fakeEvents';

import DateTrigger from '.';

const defaultLocale = 'en-GB';
jest.mock('react-intl', () => ({
  useIntl: () => ({ locale: defaultLocale, formatMessage: (id) => `${id}` }),
  defineMessages: (translations) => translations,
}));

jest.mock('@transferwise/formatting', () => ({
  formatDate: jest.fn().mockReturnValue('1.2.3'),
}));

describe('DateTrigger', () => {
  const selectedDate = new Date(1990, 11, 27);
  const locale = 'en-GB';
  let component;
  let props;

  beforeEach(() => {
    props = {
      size: 'md',
      placeholder: 'Enter date..',
      label: '',
      monthFormat: 'long',
      disabled: false,
      onClick: jest.fn(),
      onClear: null,
    };

    component = shallow(<DateTrigger {...props} />);
  });

  it('shows placeholder', () => {
    expect(button().text()).toContain('Enter date..');
  });

  describe('when date is provided', () => {
    beforeEach(() => {
      component.setProps({ selectedDate });
    });

    it('shows selected date in long format', () => {
      expect(button().text()).toContain('1.2.3');
      expect(formatting.formatDate).toHaveBeenLastCalledWith(selectedDate, locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    });

    it('shows selected date in short format', () => {
      component.setProps({ monthFormat: 'short' });
      expect(formatting.formatDate).toHaveBeenLastCalledWith(selectedDate, locale, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    });
  });

  it('does not show label by default', () => {
    expect(label()).toHaveLength(0);
  });

  it('shows label when provided', () => {
    component.setProps({ label: 'hello' });
    expect(label().text()).toBe('hello');
  });

  it('calls on click handler on button click', () => {
    button().simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('can disable the button', () => {
    component.setProps({ disabled: true });
    expect(button().prop('disabled')).toBe(true);
  });

  it('shows small button', () => {
    component.setProps({ size: 'sm' });
    expect(button().hasClass('btn-sm')).toBe(true);
  });

  it('shows medium button', () => {
    component.setProps({ size: 'md' });
    expect(button().hasClass('btn-md')).toBe(true);
  });

  it('shows large button', () => {
    component.setProps({ size: 'lg' });
    expect(button().hasClass('btn-lg')).toBe(true);
  });

  it('shows chevron button when onClear is not provided', () => {
    expect(clearButton()).toHaveLength(0);
    expect(chevron()).toHaveLength(1);
  });

  it('shows clear button when onClear is provided', () => {
    component.setProps({ onClear: jest.fn() });
    expect(clearButton()).toHaveLength(1);
  });

  it('calls onClear when user press Space', () => {
    const onClear = jest.fn();
    component.setProps({ onClear });
    clearButton().simulate('keydown', fakeKeyDownEventForKey(32));
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('calls onClear when user press Enter', () => {
    const onClear = jest.fn();
    component.setProps({ onClear });
    clearButton().simulate('keydown', fakeKeyDownEventForKey(13));
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it(`doesn't call onClear when user press a random key`, () => {
    const onClear = jest.fn();
    component.setProps({ onClear });
    clearButton().simulate('keydown', fakeKeyDownEventForKey(6));
    expect(onClear).not.toHaveBeenCalled();
  });

  const button = () => component.find('.dropdown-toggle');
  const clearButton = () => component.find('.clear-btn');
  const chevron = () => component.find(Chevron);
  const label = () => component.find('.control-label');
});
