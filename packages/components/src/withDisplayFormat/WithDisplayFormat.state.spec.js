import WithDisplayFormat from '.';

describe('WithDisplayFormat', () => {
  it('should return null if props change to the same value', () => {
    const nextProps = { displayPattern: '**-**' };
    const previousState = {
      value: '11/11',
      prevDisplayPattern: '**-**',
      historyNavigator: { reset: jest.fn() },
      triggerEvent: null,
      triggerType: null,
      pastedLength: 0,
    };
    const expectedState = null;

    expect(WithDisplayFormat.getDerivedStateFromProps(nextProps, previousState)).toStrictEqual(
      expectedState,
    );
  });

  it('should update displayPattern on props change', () => {
    const nextProps = { displayPattern: '**-**' };
    const previousState = {
      value: '11/11',
      prevDisplayPattern: '**/**',
      historyNavigator: { reset: jest.fn() },
      triggerEvent: null,
      triggerType: null,
      pastedLength: 0,
    };
    const expectedState = {
      value: '11-11',
      prevDisplayPattern: '**-**',
      triggerEvent: null,
      triggerType: null,
      pastedLength: 0,
    };
    expect(WithDisplayFormat.getDerivedStateFromProps(nextProps, previousState)).toStrictEqual(
      expectedState,
    );
  });
});
