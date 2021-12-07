/* eslint-disable testing-library/no-render-in-setup */
import '@testing-library/jest-dom';

import Avatar from '../avatar';
import { Breakpoint, Size } from '../common';
import { render, fireEvent } from '../test-utils';

import { Presentation, Type } from './decisionEnums';

import Decision from '.';

jest.mock('lodash.throttle', () => jest.fn((fn) => fn));

describe('Decision', () => {
  const props = {
    options: [
      {
        media: {
          list: <Avatar type="initials">HM</Avatar>,
          block: <img src="img.jpg" alt="alt" />,
        },
        href: '#href',
        title: 'title',
        description: 'description',
        onClick: jest.fn(),
      },
    ],
    presentation: Presentation.LIST_BLOCK,
    type: Type.NAVIGATION,
  };

  const resetClientWidth = (width) => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: width,
    });
  };

  afterAll(() => {
    const originalClientWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'clientWidth',
    );

    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
  });

  let container;
  beforeEach(() => {
    resetClientWidth(Breakpoint.EXTRA_SMALL - 1);
  });

  describe(`when presentation is ${Presentation.LIST_BLOCK}`, () => {
    beforeEach(() => {
      ({ container } = render(<Decision {...props} />));
    });

    it('renders only Navigation Option before first breakpoint', () => {
      expect(getNavigationOption()).toBeInTheDocument();
      expect(getTile()).not.toBeInTheDocument();
    });

    it('renders only Tile after first breakpoint', () => {
      resetClientWidth(Breakpoint.SMALL);
      fireEvent(window, new Event('resize'));

      expect(getNavigationOption()).not.toBeInTheDocument();
      expect(getTile()).toBeInTheDocument();
      expect(getTile()).not.toHaveClass('np-tile--small');
    });
  });

  describe(`when presentation is ${Presentation.LIST_BLOCK_GRID}`, () => {
    beforeEach(() => {
      ({ container } = render(<Decision {...props} presentation={Presentation.LIST_BLOCK_GRID} />));
    });

    it('renders only Navigation Option before first breakpoint', () => {
      expect(getNavigationOption()).toBeInTheDocument();
      expect(getTile()).not.toBeInTheDocument();
    });

    it('renders only Tile after first breakpoint', () => {
      resetClientWidth(Breakpoint.SMALL);
      fireEvent(window, new Event('resize'));

      expect(getNavigationOption()).not.toBeInTheDocument();
      expect(getTile()).toBeInTheDocument();
      expect(getTile()).not.toHaveClass('np-tile--small');
    });

    it('renders container as a grid', () => {
      resetClientWidth(Breakpoint.SMALL);
      fireEvent(window, new Event('resize'));

      expect(container.querySelector('.np-decision')).toHaveClass('np-decision--grid');
      expect(container.querySelector('.np-size-swapper')).toHaveClass('flex-wrap');
    });
  });

  describe(`when presentation is ${Presentation.LIST_BLOCK} and size is Small`, () => {
    beforeEach(() => {
      ({ container } = render(
        <Decision {...props} presentation={Presentation.LIST_BLOCK} size={Size.SMALL} />,
      ));
    });

    it('renders only Navigation Option before breakpoint', () => {
      expect(getNavigationOption()).toBeInTheDocument();
      expect(getTile()).not.toBeInTheDocument();
    });

    it('renders Small Tile after breakpoint', () => {
      resetClientWidth(Breakpoint.EXTRA_SMALL);
      fireEvent(window, new Event('resize'));

      expect(getNavigationOption()).not.toBeInTheDocument();
      expect(getTile()).toBeInTheDocument();
      expect(getTile()).toHaveClass('np-tile--small');
    });
  });

  describe(`when presentation is ${Presentation.LIST}`, () => {
    beforeEach(() => {
      ({ container } = render(<Decision {...props} presentation={Presentation.LIST} />));
    });

    it('renders Navigation Option before breakpoint', () => {
      expect(getNavigationOption()).toBeInTheDocument();
      expect(getTile()).not.toBeInTheDocument();
    });
  });

  const getNavigationOption = () => container.querySelector('.np-navigation-option');
  const getTile = () => container.querySelector('.np-tile');
});
