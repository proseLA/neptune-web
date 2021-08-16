import NavigationOption from '../navigationOption';

import NavigationOptionsList from '.';

export default {
  component: NavigationOptionsList,
  title: 'NavigationOptionsList',
};

export const Basic = () => {
  return (
    <NavigationOptionsList>
      <NavigationOption id="navigation-option" name="navigation-option" title="Option One" />
      <NavigationOption id="navigation-option" name="navigation-option" title="Option Two" />
    </NavigationOptionsList>
  );
};
