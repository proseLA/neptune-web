import { Link } from '@transferwise/icons';
import classNames from 'classnames';
import { ReactElement, useState } from 'react';

type HeadingProps = {
  id?: string;
  children: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  preventBookmark?: boolean;
};

const Heading = ({ as, preventBookmark, ...props }: HeadingProps): ReactElement => {
  const [hover, setHover] = useState(false);
  const HeaderTag = `${as}` as keyof JSX.IntrinsicElements;

  if (preventBookmark) {
    return <HeaderTag {...props} />;
  }

  const { id, children, className } = props;

  const headerId = id || `${children.toLowerCase().split(' ').join('-')}`;

  return (
    <a
      href={`#${headerId}`}
      className={classNames('clickable-heading')}
      onMouseEnter={() => setHover(true)}
      onFocus={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onBlur={() => setHover(false)}
    >
      <HeaderTag id={headerId} className={classNames(className, 'd-flex')}>
        {children}
        {hover && (
          <>
            {' '}
            <Link size={parseInt(as[1]) < 3 ? 24 : 16} />
          </>
        )}
      </HeaderTag>
    </a>
  );
};

export default Heading;
