import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#37517e',
  colorSecondary: '#00b9ff',

  // UI
  appBg: '#f2f5f7',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Averta", "Avenir W02", "Avenir", Helvetica, Arial, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: '#37517e',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Wise',
  brandUrl: 'https://wise.com',
  brandImage: 'https://wise.com/public-resources/assets/logos/wise/brand_logo.svg',

  showSearchBox: false,
});
