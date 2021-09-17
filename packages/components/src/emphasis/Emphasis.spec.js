import '@testing-library/jest-dom';
import { render } from '../test-utils';

import Emphasis from './Emphasis';

describe('Emphasis', () => {
  describe('renders emphasis text in span and in em emphased bit', () => {
    it.each`
      text                                  | selector
      ${'<important>important</important>'} | ${'em.emphasis.emphasis--important'}
      ${'<positive>positive</positive>'}    | ${'em.emphasis.emphasis--positive'}
      ${'<negative>negative</negative>'}    | ${'em.emphasis.emphasis--negative'}
      ${'<warning>warning</warning>'}       | ${'em.emphasis.emphasis--warning'}
    `('$text renders as expected with selectoe $selector', ({ text, selector }) => {
      const { container } = render(<Emphasis text={text} />);

      expect(container.querySelector(selector)).toBeInTheDocument();
      expect(container.firstElementChild.tagName).toBe('SPAN');
    });
  });

  it('escapes malicious tags', () => {
    const { container } = render(<Emphasis text="<script></script>" />);
    expect(container.querySelector('script')).not.toBeInTheDocument();
  });
});
