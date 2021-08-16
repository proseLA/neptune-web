import MobileNav from './MobileNav';
// eslint-disable-next-line jest/no-mocks-import
import { Items } from './__mocks__/items';

export default {
  component: MobileNav,
  title: 'MobileNav',
};

export const Basic = () => {
  return <MobileNav items={Items} activeItemPath={Items[0].path} />;
};
