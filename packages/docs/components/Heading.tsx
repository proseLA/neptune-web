import { Link } from '@transferwise/icons';
import classNames from 'classnames';
import { ReactElement, useState } from 'react';

type HeadingProps = {
  id?: string | undefined;
  children: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

const Heading = ({ id = undefined, as, children, className }: HeadingProps): ReactElement => {
  const [hover, setHover] = useState(false);

  const headerId = id || `${children.toLowerCase().split(' ').join('-')}`;
  const HeaderTag = `${as}` as keyof JSX.IntrinsicElements;

  return (
    <a
      href={`#${headerId}`}
      className={classNames('clickable-heading', className)}
      onMouseEnter={() => setHover(true)}
      onFocus={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onBlur={() => setHover(false)}
    >
      <HeaderTag id={headerId}>
        {children}{' '}
        {hover && <Link className="d-inline-block" size={parseInt(as[1]) < 3 ? 24 : 16} />}
      </HeaderTag>
    </a>
  );
};

export default Heading;
