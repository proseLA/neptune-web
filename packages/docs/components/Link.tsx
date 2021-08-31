import NextLink from 'next/link';
import { ReactNode, ReactElement } from 'react';

type LinkProps = {
  href: string;
  children: ReactNode;
};

const Link = ({ href, children }: LinkProps): ReactElement => {
  const to = `${process.env.ASSET_PREFIX || ''}${href}`;

  return (
    <NextLink href={to} prefetch={false}>
      {children}
    </NextLink>
  );
};

export default Link;
