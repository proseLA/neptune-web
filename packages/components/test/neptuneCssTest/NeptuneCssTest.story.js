import Alert from '../../src/alert';

import * as components from './components';

export default {
  component: 'Neptune css test',
  title: 'Neptune css test',
};

export const Basic = () => (
  <>
    <Alert
      type="negative"
      message="This page is used only for visual regression testing. We DO NOT guarantee support for the
      elements used on this page. Please DO NOT use as reference."
    />
    {/* eslint-disable-next-line react/no-danger */}
    <div className="m-t-5" dangerouslySetInnerHTML={{ __html: Object.values(components) }} />
  </>
);
