import NextLink from 'next/link';
import { ReactNode, ReactElement } from 'react';

type LinkProps = {
  href: string;
  children: ReactNode;
};

const Link = ({ href, children }: LinkProps): ReactElement => {
  return (
    <NextLink href={process.env.ASSET_PREFIX || '' + href} prefetch={false}>
      {children}
    </NextLink>
  );
};

export default Link;
