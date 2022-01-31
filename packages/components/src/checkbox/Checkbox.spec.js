import '@testing-library/jest-dom';

import { render, fireEvent, screen } from '@testing-library/react';

import Checkbox from '.';

describe('Checkbox', () => {
  let props;

  beforeEach(() => {
    props = {
      label: <b>hello</b>,
      onChange: jest.fn(),
    };
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('renders the given label', () => {
    const { container } = render(<Checkbox {...props} />);
    expect(container).toMatchSnapshot();
  });

  it('is enabled by default', () => {
    const { container } = render(<Checkbox {...props} />);
    expect(getCheckboxContainer(container)).not.toHaveClass('disabled');
  });

  it('does not render secondary text', () => {
    const { container } = render(<Checkbox {...props} />);
    expect(container.querySelector('small')).not.toBeInTheDocument();
  });

  it('calls change handler with new checked value when checkbox button is clicked', () => {
    const onChange = jest.fn();

    const { rerender } = render(<Checkbox {...props} onChange={onChange} />);

    expect(onChange).not.toHaveBeenCalled();
    fireEvent.click(getLabel());
    expect(onChange).toHaveBeenCalledWith(true);

    rerender(<Checkbox {...props} checked onChange={onChange} />);

    fireEvent.click(getLabel());
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('does not call change handler on checkbox button click when disabled', () => {
    const onChange = jest.fn();

    render(<Checkbox {...props} disabled onChange={onChange} />);

    fireEvent.click(getLabel());
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not call change handler on checkbox button click when readOnly', () => {
    const onChange = jest.fn();

    render(<Checkbox {...props} readOnly onChange={onChange} />);

    fireEvent.click(getLabel());
    expect(onChange).not.toHaveBeenCalled();
  });

  it('has disabled class when the disabled prop is true', () => {
    const { container } = render(<Checkbox {...props} disabled />);
    expect(getCheckboxContainer(container).firstChild).toHaveClass('disabled');
  });

  it('has error class and passes it to checkbox button when required and not checked', () => {
    const { container, rerender } = render(<Checkbox {...props} required checked />);
    expect(getCheckboxContainer(container)).not.toHaveClass('has-error');

    rerender(<Checkbox {...props} required />);

    expect(getCheckboxContainer(container)).toHaveClass('has-error');
  });

  it('ignores required if disabled or readOnly', () => {
    const { container, rerender } = render(<Checkbox {...props} required disabled />);
    expect(getCheckboxContainer(container)).not.toHaveClass('has-error');

    rerender(<Checkbox {...props} required readOnly />);
    expect(getCheckboxContainer(container)).not.toHaveClass('has-error');
  });

  it('has an asterisk after the label when required', () => {
    render(<Checkbox {...props} required />);

    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it(`doesn't passes checked to checkbox button`, () => {
    render(<Checkbox {...props} />);
    expect(getCheckbox()).not.toBeChecked();
  });

  it('passes checked to checkbox button', () => {
    render(<Checkbox {...props} checked />);
    expect(getCheckbox()).toHaveAttribute('checked');
  });

  it('passes disabled to checkbox button', () => {
    const { rerender } = render(<Checkbox {...props} />);
    expect(getCheckbox()).toBeEnabled();

    rerender(<Checkbox {...props} disabled />);
    expect(getCheckbox()).toHaveAttribute('disabled');
  });

  it('disables checkbox button if readOnly', () => {
    const { rerender } = render(<Checkbox {...props} />);

    expect(getCheckbox()).toBeEnabled();

    rerender(<Checkbox {...props} readOnly />);
    expect(getCheckbox()).toHaveAttribute('disabled');
  });

  it('displays secondary text when supplied', () => {
    const { container } = render(<Checkbox {...props} secondary="secondary text" />);
    expect(screen.getByText('secondary text')).toBeInTheDocument();
    expect(getCheckboxContainer(container)).toHaveClass('checkbox-lg');
  });

  const getCheckboxContainer = (container) => container.querySelector('.np-checkbox');
  const getLabel = () => screen.getByText('hello').parentElement;
  const getCheckbox = () => screen.getByRole('checkbox');
});
