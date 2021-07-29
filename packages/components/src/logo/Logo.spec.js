import { render } from '../test-utils';
import Logo, { LogoType } from '.';

describe('Logo', () => {
  it('renders wise logo', () => {
    expect(render(<Logo className="class" type={LogoType.WISE} />).container).toMatchSnapshot();
  });

  it('renders wise logo by default', () => {
    expect(render(<Logo className="class" />).container).toMatchSnapshot();
  });

  it('renders wise business logo', () => {
    expect(
      render(<Logo className="class" type={LogoType.WISE_BUSINESS} />).container,
    ).toMatchSnapshot();
  });

  it('renders wise logo inversed', () => {
    expect(
      render(<Logo className="class" type={LogoType.WISE} inverse />).container,
    ).toMatchSnapshot();
  });

  it('renders wise business logo inversed', () => {
    expect(
      render(<Logo className="class" type={LogoType.WISE_BUSINESS} inverse />).container,
    ).toMatchSnapshot();
  });
});
