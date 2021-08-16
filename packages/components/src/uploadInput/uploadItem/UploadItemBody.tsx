import React, { PropsWithChildren, MouseEvent } from 'react';

type UploadItemLinkProps = PropsWithChildren<{
  url?: string;
  onDownload?: (event: MouseEvent) => void;
}>;

export const UploadItemBody = ({ children, url, onDownload }: UploadItemLinkProps) => {
  if (!url) {
    return <div>{children}</div>;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onClick={onDownload}>
      {children}
    </a>
  );
};
