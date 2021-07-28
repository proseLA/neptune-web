import React from 'react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';

import { render, screen, fireEvent } from '../test-utils';

import DateLookup from '.';
import { Breakpoint } from '../common';

// eslint-disable-next-line
jest.mock('../dimmer', () => ({ children }) => <div className="dimmer">{children}</div>);

describe('DateLookup (events)', () => {
  const date = new Date(2018, 11, 27);
  const min = new Date(2018, 11, 26);
  const max = new Date(2018, 11, 28);

  let props;
  let container;
  let rerender;

  const winWidth = (width) => {
    window.innerWidth = width;
  };

  beforeEach(() => {
    props = {
      value: date,
      min,
      max,
      size: 'lg',
      placeholder: 'Asd..',
      label: 'label',
      onChange: jest.fn(),
      onClick: jest.fn(),
      disabled: false,
      clearable: false,
    };
    ({ container } = render(<DateLookup {...props} />));
  });

  afterEach(() => {
    closeDateLookup(container);
  });

  it('sets focus to header label', () => {
    openDateLookup();

    expect(getDateButton()).toHaveFocus();
  });

  it('switches to years', () => {
    openDateLookup();
    clickDateButton();

    expect(getActiveYearButton()).toHaveFocus();
  });

  it('switches to months', () => {
    openDateLookup();
    clickDateButton();
    user.click(getActiveYearButton());

    expect(getActiveMonthButton()).toHaveFocus();
  });

  it('switches to days', () => {
    openDateLookup();
    clickDateButton();
    user.click(getActiveYearButton());
    user.click(getActiveMonthButton());

    expect(getActiveDayButton()).toHaveFocus();
  });

  it('updates selected date and closes', () => {
    openDateLookup();
    const d = new Date(2018, 11, 28);
    const newDay = screen.getByText(`${d.getDate()}`);
    user.click(newDay);

    expect(props.onChange).toHaveBeenCalledWith(d);
    expect(getOpenButton()).toHaveFocus();
  });

  describe('adjust if offscreen', () => {
    const calPosition = (left) => {
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          width: 200,
          height: 100,
          top: 0,
          left,
          bottom: 0,
          right: left + 200,
        };
      });
    };

    it('will not adjust if the calendar is not offscreen', () => {
      winWidth(600);
      calPosition(0);
      openDateLookup();

      expect(getLookupMenu()).not.toHaveClass('dropdown-menu-xs-right');
    });

    it('will adjust if the calendar is offscreen to the right', () => {
      winWidth(600);
      calPosition(500);
      openDateLookup();

      expect(getLookupMenu()).toHaveClass('dropdown-menu-xs-right');
    });

    it('will add the class on resize if necessary', () => {
      winWidth(700);
      calPosition(500);
      openDateLookup();

      expect(getLookupMenu()).not.toHaveClass('dropdown-menu-xs-right');

      winWidth(600);
      fireEvent(window, new Event('resize'));

      expect(getLookupMenu()).toHaveClass('dropdown-menu-xs-right');
    });
  });

  describe('at extra small breakpoints', () => {
    it('it opens dateLookup using slider', () => {
      winWidth(Breakpoint.SMALL);
      openDateLookup();
      expect(getDimmer()).toBeInTheDocument();
    });

    it('it opens dateLookup using slider', () => {
      winWidth(Breakpoint.SMALL + 1);
      openDateLookup();
      expect(getDimmer()).not.toBeInTheDocument();
      winWidth(Breakpoint.SMALL);
      fireEvent(window, new Event('resize'));
      expect(getDimmer()).toBeInTheDocument();
    });
  });

  describe('when is clearable', () => {
    beforeEach(() => {
      props = { value: date, onChange: jest.fn(), clearable: true };
      ({ container, rerender } = render(<DateLookup {...props} />));
    });

    it(`doesn't show clear button if disable is true`, () => {
      expect(getClearButton()).toBeInTheDocument();

      rerender(<DateLookup {...props} disabled />);

      expect(getClearButton()).not.toBeInTheDocument();
    });

    // prop-types doesn't allow value prop to be type of `Date | null | undefined` and test fails because of warning message
    xit(`doesn't show clear button if value is null`, () => {
      expect(getClearButton()).toBeInTheDocument();

      rerender(<DateLookup {...props} value={null} />);

      expect(getClearButton()).not.toBeInTheDocument();
    });

    it('when user clicks on clear the focus returns to btn', () => {
      clickClearButton();
      expect(getOpenButton()).toHaveFocus();
    });

    it('onChange gets called with null when reset button is clicked', () => {
      clickClearButton();
      expect(props.onChange).toHaveBeenCalledWith(null);
    });
  });

  const openDateLookup = () => {
    user.click(getOpenButton());
  };

  const clickDateButton = () => {
    user.click(getDateButton());
  };

  // Close dateLookup and removes events attached to documents.
  const closeDateLookup = () => {
    user.click(container);
  };

  const clickClearButton = () => {
    user.click(getClearButton());
  };

  const getActiveYearButton = () =>
    container.querySelector('button.tw-date-lookup-year-option.active');

  const getActiveMonthButton = () =>
    container.querySelector('button.tw-date-lookup-month-option.active');

  const getActiveDayButton = () =>
    container.querySelector('button.tw-date-lookup-day-option.active');

  const getClearButton = () => container.querySelector('.clear-btn');
  const getOpenButton = () => container.querySelector('button.np-date-trigger');
  const getLookupMenu = () => container.querySelector('.tw-date-lookup-menu');
  const getDateButton = () => container.querySelector('button.tw-date-lookup-header-current');
  const getDimmer = () => container.querySelector('.dimmer');
});
