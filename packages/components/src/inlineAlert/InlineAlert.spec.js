/* eslint-disable no-console */
import '@testing-library/jest-dom';
import { render, getByRole } from '../test-utils';
import InlineAlert from './InlineAlert';
import { Sentiment } from '../common';

describe('InlineAlert', () => {
  let component;
  let container;
  let getByText;

  const getAlert = (el) => getByRole(el, 'alert');
  const message = 'Your card is on its way.';

  describe('defaults', () => {
    beforeEach(() => {
      ({ container, getByText } = render(<InlineAlert>{message}</InlineAlert>));
      component = getAlert(container);
    });

    it('the message is rendered', () => {
      getByText(message);
    });

    it('will be of type neutral', () => {
      expect(component.className).toContain('alert-neutral');
    });

    it('has a top left arrow', () => {
      expect(component.className).toContain('arrow');
    });
  });

  describe('types', () => {
    const getComponentWithType = (type) => {
      ({ container } = render(<InlineAlert type={type}>{message}</InlineAlert>));
      return getAlert(container);
    };

    it('renders neutral', () => {
      component = getComponentWithType(Sentiment.NEUTRAL);
      expect(component.className).toContain('alert-neutral');
    });

    it('renders positive', () => {
      component = getComponentWithType(Sentiment.POSITIVE);
      expect(component.className).toContain('alert-positive');
    });

    it('renders negative', () => {
      component = getComponentWithType(Sentiment.NEGATIVE);
      expect(component.className).toContain('alert-negative');
    });

    it('renders warning', () => {
      component = getComponentWithType(Sentiment.WARNING);
      expect(component.className).toContain('alert-warning');
    });
  });
});
