/* eslint-disable react/function-component-definition */
type CssClassProps = {
  name: string;
  code?: boolean;
};

export function CssClass({ name, code = false }: CssClassProps) {
  const cssSelector = `.${name}`;
  return code ? <code>{cssSelector}</code> : <>{cssSelector}</>;
}
