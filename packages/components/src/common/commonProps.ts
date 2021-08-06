export type CommonProps = {
  /**
   * Space-separated list of the case-sensitive CSS classes,
   * most would be applied to outermost element inside the component
   *
   * @see https://github.com/transferwise/neptune-web/blob/main/rfc/0001-always-pass-classname.md
   */
  className?: string;
};

export type AriaLabelProp = {
  'aria-label'?: string;
};

export type LinkProps = {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};
