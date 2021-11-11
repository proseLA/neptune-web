/* eslint-disable no-console */
import {
  InfoCircle,
  CheckCircle,
  AlertCircle,
  Alert as AlertIcon,
  Emoji,
} from '@transferwise/icons';
import React from 'react';

import { Sentiment, Size } from '../common';
import { render, cleanup, screen, userEvent, fireEvent } from '../test-utils';

import Alert from './Alert';
import { AlertArrowPosition } from './withArrow';

jest.mock('react', () => {
  const originReact = jest.requireActual('react');
  const mUseReference = jest.fn();
  return {
    ...originReact,
    useRef: mUseReference,
  };
});

describe('Alert', () => {
  let component;
  let container;
  let alert;
  let closeButton;
  let action;

  const renderIcon = (Icon) => render(<Icon size={24} />).container.innerHTML;

  const iconTypeMap = {
    [Sentiment.POSITIVE]: renderIcon(CheckCircle),
    [Sentiment.NEUTRAL]: renderIcon(InfoCircle),
    [Sentiment.WARNING]: renderIcon(AlertIcon),
    [Sentiment.NEGATIVE]: renderIcon(AlertCircle),
  };

  const classForType = (type) => `alert-${type}`;

  const message = 'Your card is on its way.';

  const origWarn = console.warn;
  let mockedWarn;

  beforeAll(() => {
    mockedWarn = jest.fn();
    console.warn = mockedWarn;
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  afterAll(() => {
    console.warn = origWarn;
  });

  describe('defaults', () => {
    beforeEach(() => {
      ({ container } = render(<Alert message={message} />));
      component = screen.getByRole('alert');
    });

    it('the message is rendered', () => {
      expect(screen.getByText(message)).toBeInTheDocument();
    });

    it('will be of type neutral', () => {
      expect(component).toHaveClass(classForType(Sentiment.NEUTRAL));
      expect(component).toContainHTML(iconTypeMap[Sentiment.NEUTRAL]);
    });

    it('is not dismissible', () => {
      expect(container.querySelector('button')).not.toBeInTheDocument();
    });

    it('has no arrow', () => {
      expect(component).not.toHaveClass('arrow');
    });
  });

  describe('deprecated props', () => {
    it('renders arrows but logs a warning', () => {
      render(<Alert arrow={AlertArrowPosition.BOTTOM} message={message} />);
      component = screen.getByRole('alert');

      expect(component).toHaveClass('arrow');
      expect(component).toHaveClass('arrow-bottom');
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('renders children but logs a warning', () => {
      render(<Alert>{message}</Alert>);

      expect(screen.getByText(message)).toBeInTheDocument();
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('dismissible is ignored and a warning is logged', () => {
      ({ container } = render(<Alert dismissible message={message} />));

      expect(container.querySelector('button')).not.toBeInTheDocument();
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('size is ignored and a warning is logged', () => {
      const { container: small } = render(<Alert size={Size.SMALL} message={message} />);
      const { container: large } = render(<Alert size={Size.LARGE} message={message} />);

      expect(small.innerHTML).toStrictEqual(large.innerHTML);
      expect(mockedWarn).toHaveBeenCalledTimes(2);
    });

    it('maps type SUCCESS to type POSITIVE and logs a warning', () => {
      render(<Alert type={Sentiment.SUCCESS} message={message} />);

      const success = screen.getByRole('alert');

      expect(success).toHaveClass(classForType(Sentiment.POSITIVE));
      expect(success).toContainHTML(iconTypeMap[Sentiment.POSITIVE]);
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('maps type INFO to type NEUTRAL and logs a warning', () => {
      render(<Alert type={Sentiment.INFO} message={message} />);

      const info = screen.getByRole('alert');

      expect(info).toHaveClass(classForType(Sentiment.NEUTRAL));
      expect(info).toContainHTML(iconTypeMap[Sentiment.NEUTRAL]);
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });

    it('maps type ERROR to type NEGATIVE and logs a warning', () => {
      render(<Alert type={Sentiment.ERROR} message={message} />);

      const error = screen.getByRole('alert');

      expect(error).toHaveClass(classForType(Sentiment.NEGATIVE));
      expect(error).toContainHTML(iconTypeMap[Sentiment.NEGATIVE]);
      expect(mockedWarn).toHaveBeenCalledTimes(1);
    });
  });

  describe('action', () => {
    it('sets text and href', () => {
      action = {
        href: 'fluffykittens.com',
        text: 'Learn more',
      };
      render(<Alert action={action} message={message} />);

      const element = screen.getByText(action.text);

      expect(element).toHaveAttribute('href', action.href);
      expect(element).not.toHaveAttribute('aria-label');
      expect(element).not.toHaveAttribute('target');
    });

    it('adds additional attributes', () => {
      action = {
        'aria-label': 'Learn more about fluffy kittens',
        href: 'fluffykittens.com',
        text: 'Learn more',
        target: '_blank',
      };
      render(<Alert action={action} message={message} />);

      const element = screen.getByText(action.text);

      expect(element).toHaveAttribute('aria-label', action['aria-label']);
      expect(element).toHaveAttribute('target', action.target);
    });
  });

  describe('markdown support', () => {
    const input = 'That is one **bold cat**';
    const output = 'That is one <strong>bold cat</strong>';

    it('converts message to markdown', () => {
      render(<Alert message={input} />);

      expect(screen.getByRole('alert')).toContainHTML(output);
    });

    it('does not convert children to markdown', () => {
      render(<Alert>{input}</Alert>);

      expect(screen.getByText(input)).toBeInTheDocument();
      expect(screen.getByRole('alert')).not.toContainHTML(output);
    });
  });

  describe('className', () => {
    it('applies provided classes', () => {
      render(<Alert className="cats" message={message} />);

      expect(screen.getByRole('alert')).toHaveClass('cats');
    });
  });

  describe('custom icon', () => {
    it('uses any provided icon in preference to the default', () => {
      const icon = <Emoji size={24} />;
      const view = renderIcon(Emoji);

      render(<Alert icon={icon} message={message} />);
      component = screen.getByRole('alert');

      expect(component).toContainHTML(view);
      expect(component).not.toContainHTML(iconTypeMap[Sentiment.NEGATIVE]);
    });
  });

  describe('onDismiss', () => {
    it('renders the close button if onDismiss is provided', () => {
      render(<Alert message={message} onDismiss={jest.fn()} />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onDismiss when the close button is clicked', () => {
      const onDismiss = jest.fn();

      render(<Alert message={message} onDismiss={onDismiss} />);

      userEvent.click(screen.getByRole('button'));

      expect(onDismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe('types', () => {
    const getComponentWithType = (type) => {
      render(<Alert type={type} message={message} />);
      return screen.getByRole('alert');
    };

    it('renders neutral', () => {
      component = getComponentWithType(Sentiment.NEUTRAL);

      expect(component).toHaveClass(classForType(Sentiment.NEUTRAL));
      expect(component).toContainHTML(iconTypeMap[Sentiment.NEUTRAL]);
    });

    it('renders positive', () => {
      component = getComponentWithType(Sentiment.POSITIVE);

      expect(component).toHaveClass(classForType(Sentiment.POSITIVE));
      expect(component).toContainHTML(iconTypeMap[Sentiment.POSITIVE]);
    });

    it('renders negative', () => {
      component = getComponentWithType(Sentiment.NEGATIVE);

      expect(component).toHaveClass(classForType(Sentiment.NEGATIVE));
      expect(component).toContainHTML(iconTypeMap[Sentiment.NEGATIVE]);
    });

    it('renders warning', () => {
      component = getComponentWithType(Sentiment.WARNING);

      expect(component).toHaveClass(classForType(Sentiment.WARNING));
      expect(component).toContainHTML(iconTypeMap[Sentiment.WARNING]);
    });
  });

  describe('on touch devices', () => {
    const { location } = window;

    beforeAll(() => {
      delete window.location;
      jest.spyOn(window, 'open').mockImplementation();
      window.location = {
        assign: jest.fn(),
      };
    });

    afterAll(() => {
      window.location = location;
    });

    describe('when target is not blank', () => {
      beforeEach(() => {
        action = {
          'aria-label': 'Learn more about fluffy kittens',
          href: '/test',
          text: 'Learn more',
        };

        render(<Alert action={action} message={message} onDismiss={jest.fn()} />);

        alert = screen.getByRole('alert');
        closeButton = screen.getByLabelText('Close');

        jest.spyOn(React, 'useRef').mockReturnValue({
          current: closeButton,
        });
      });

      afterEach(() => {
        cleanup();
      });

      it('loads action on tap', () => {
        fireEvent.touchStart(alert);
        expect(window.location.assign).not.toHaveBeenCalled();
        fireEvent.touchEnd(alert);
        expect(window.location.assign).toHaveBeenCalledWith(action.href);
      });

      it('doesn`t redirect on touch move', () => {
        fireEvent.touchStart(alert);
        expect(window.location.assign).not.toHaveBeenCalled();
        fireEvent.touchMove(alert);
        expect(window.location.assign).not.toHaveBeenCalled();
        fireEvent.touchEnd(alert);
        expect(window.location.assign).not.toHaveBeenCalled();
      });
    });

    describe('when target is blank', () => {
      beforeEach(() => {
        action = {
          'aria-label': 'Learn more about fluffy kittens',
          href: '/test',
          text: 'Learn more',
          target: '_blank',
        };

        render(<Alert action={action} message={message} onDismiss={jest.fn()} />);

        alert = screen.getByRole('alert');
        closeButton = screen.getByLabelText('Close');

        jest.spyOn(React, 'useRef').mockReturnValue({
          current: closeButton,
        });
      });

      afterEach(() => {
        cleanup();
      });

      it('opens a new window on tap', () => {
        fireEvent.touchStart(alert);
        expect(window.open).not.toHaveBeenCalled();
        fireEvent.touchEnd(alert);
        expect(window.open).toHaveBeenCalledWith(action.href);
      });
    });

    describe('when action is not provided', () => {
      beforeEach(() => {
        render(<Alert message={message} onDismiss={jest.fn()} />);

        alert = screen.getByRole('alert');
        closeButton = screen.getByLabelText('Close');

        jest.spyOn(React, 'useRef').mockReturnValue({
          current: closeButton,
        });
      });

      afterEach(() => {
        cleanup();
      });

      it('opens a new window on tap', () => {
        fireEvent.touchStart(alert);
        expect(window.open).not.toHaveBeenCalled();
        fireEvent.touchEnd(alert);
        expect(window.open).not.toHaveBeenCalled();
      });
    });

    it('when close button is clicked redirection is not triggered', () => {
      jest.spyOn(React, 'useRef').mockReturnValue({
        current: closeButton,
      });

      fireEvent.touchStart(closeButton);
      expect(window.open).not.toHaveBeenCalled();
      fireEvent.touchEnd(closeButton);
      expect(window.open).not.toHaveBeenCalled();
    });
  });
});
