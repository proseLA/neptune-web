export type CommonProps = {
  /**
   * Space-separated list of the case-sensitive CSS classes,
   * most would be applied to outermost element inside the component
   *
   * @see https://github.com/transferwise/neptune-web/blob/main/rfc/0001-always-pass-classname.md
   */
  className?: string;
};

export type AriaLabelProperty = {
  'aria-label'?: string;
};

export type LinkProps = {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

export type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type OnClickHandler = {
  onClick: (event: Event) => void;
};
