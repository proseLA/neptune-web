import React, { PropsWithChildren } from 'react';

type UploadItemLinkProps = PropsWithChildren<{
  url?: string;
}>;

export const UploadItemBody = ({ children, url }: UploadItemLinkProps) => {
  if (!url) {
    return <div>{children}</div>;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
