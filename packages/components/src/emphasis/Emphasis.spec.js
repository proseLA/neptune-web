import '@testing-library/jest-dom';
import { render } from '../test-utils';
import Emphasis from './Emphasis';

describe('Emphasis', () => {
  describe('renders emphasis tags as spans with the correct class applied', () => {
    test.each`
      text                                  | selector
      ${'<important>important</important>'} | ${'span.emphasis.emphasis--important'}
      ${'<positive>positive</positive>'}    | ${'span.emphasis.emphasis--positive'}
      ${'<negative>negative</negative>'}    | ${'span.emphasis.emphasis--negative'}
      ${'<warning>warning</warning>'}       | ${'span.emphasis.emphasis--warning'}
    `('$text renders as expected with selectoe $selector', ({ text, selector }) => {
      const { container } = render(<Emphasis text={text} />);
      expect(container.querySelector(selector)).toBeInTheDocument();
    });
  });

  it('escapes malicious tags', () => {
    const { container } = render(<Emphasis text="<script></script>" />);
    expect(container.querySelector('script')).not.toBeInTheDocument();
  });
});
