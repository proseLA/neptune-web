export const componentsPackageName = '@transferwise/components';

export const defaultPrintOptions = {
  quote: 'single',
  trailingComma: true,
};

export function getLiteralType(parser) {
  return parser === 'tsx' ? 'StringLiteral' : 'Literal';
}

export const log = (verbose, message, level = 0) => {
  if (verbose >= level) {
    // eslint-disable-next-line no-undef
    api.report(`✨ ${message}`);
  }
};
