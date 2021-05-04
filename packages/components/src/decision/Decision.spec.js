import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '../test-utils';

import Decision, { DecisionPresentation, DecisionType } from '.';
import Avatar from '../avatar';
import { Breakpoint, Size } from '../common';

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
    presentation: DecisionPresentation.LIST_BLOCK,
    type: DecisionType.NAVIGATION,
  };

  const originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth');
  const resetClientWidth = (width) => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
      configurable: true,
      value: width,
    });
  };

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
    window.requestAnimationFrame.mockRestore();
  });

  let container;
  beforeEach(() => {
    resetClientWidth(Breakpoint.EXTRA_SMALL - 1);
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb());
  });

  describe(`when presentation is ${DecisionPresentation.LIST_BLOCK}`, () => {
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

  describe(`when presentation is ${DecisionPresentation.LIST_BLOCK_GRID}`, () => {
    beforeEach(() => {
      ({ container } = render(
        <Decision {...props} presentation={DecisionPresentation.LIST_BLOCK_GRID} />,
      ));
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

  describe(`when presentation is ${DecisionPresentation.LIST_BLOCK} and size is Small`, () => {
    beforeEach(() => {
      ({ container } = render(
        <Decision {...props} presentation={DecisionPresentation.LIST_BLOCK} size={Size.SMALL} />,
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

  describe(`when presentation is ${DecisionPresentation.LIST}`, () => {
    beforeEach(() => {
      ({ container } = render(<Decision {...props} presentation={DecisionPresentation.LIST} />));
    });

    it('renders Navigation Option before breakpoint', () => {
      expect(getNavigationOption()).toBeInTheDocument();
      expect(getTile()).not.toBeInTheDocument();
    });
  });

  const getNavigationOption = () => container.querySelector('.tw-navigation-option');
  const getTile = () => container.querySelector('.np-tile');
});
