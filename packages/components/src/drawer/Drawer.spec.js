import { shallow } from 'enzyme';

import Drawer from '.';

jest.mock('../common');
jest.useFakeTimers();

jest.mock(
  '../dimmer',
  () =>
    function ({ open, children }) {
      return open ? <div className="dimmer">{children}</div> : null;
    },
);

jest.mock(
  '../slidingPanel',
  () =>
    function ({ open, children }) {
      return open ? <div className="sliding-panel">{children}</div> : null;
    },
);

const defaultLocale = 'en-GB';

jest.mock('react-intl', () => ({
  injectIntl: (Component) =>
    function (props) {
      return <Component {...props} intl={{ locale: defaultLocale }} />;
    },
  useIntl: () => ({ locale: defaultLocale, formatMessage: (id) => `${id}` }),
  defineMessages: (translations) => translations,
}));

describe('Drawer', () => {
  let component;
  const props = {
    open: true,
    position: 'left',
    onClose: jest.fn(),
    children: null,
    headerTitle: null,
    footerContent: null,
  };

  beforeEach(() => {
    component = shallow(<Drawer {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders drawer header if title is provided', () => {
    expect(component.find('.np-drawer-header--title')).toHaveLength(0);
    component.setProps({ headerTitle: 'A title' });
    expect(component.find('.np-drawer-header--title')).toHaveLength(1);
    expect(component.find('.np-drawer-header--title').text()).toBe('A title');
  });

  it('renders header with or without borders', () => {
    expect(component.find('.np-drawer-header--withborder')).toHaveLength(0);
    component.setProps({ headerTitle: 'A title' });
    expect(component.find('.np-drawer-header--withborder')).toHaveLength(1);
  });

  it('renders content if children are provided', () => {
    expect(component.find('.np-drawer-content')).toHaveLength(0);
    component.setProps({ children: 'SomeChildren' });
    expect(component.find('.np-drawer-content')).toHaveLength(1);
  });

  it('renders drawer footer if footerContent is provided', () => {
    expect(component.find('.np-drawer-footer')).toHaveLength(0);
    component.setProps({ footerContent: 'SomeContent' });
    expect(component.find('.np-drawer-footer')).toHaveLength(1);
  });

  it('adds padding', () => {
    component.setProps({ children: 'content', footerContent: 'content' });
    expect(component.find('.np-drawer-p-x')).toHaveLength(3);
    expect(component.find('.np-drawer-p-y')).toHaveLength(1);
  });
});
