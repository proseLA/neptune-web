import Types from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import theme from '../prismTheme';

const LiveEditorBlock = ({ code, scope, display }) => (
  <div className="row live-provider">
    <LiveProvider code={code} scope={scope}>
      {display === 'vertical' ? (
        <>
          <div className="col-xs-12 live-preview m-b-5 p-x-0">
            <LivePreview />
          </div>
          <div
            // react-live is broken at RTL mode
            // and it doesn't have support for this feature (e.g can't be configured via some prop) either
            // so enforcing LTR mode in any case
            dir="ltr"
            className="col-xs-12 live-editor m-b-5"
          >
            <LiveEditor theme={theme} />
          </div>
        </>
      ) : (
        <>
          <div dir="ltr" className="col-xl-6 live-editor">
            <LiveEditor theme={theme} />
          </div>
          <div className="col-xl-6 live-preview">
            <LivePreview />
          </div>
        </>
      )}
      <div className="col-xs-12">
        <LiveError />
      </div>
    </LiveProvider>
  </div>
);

LiveEditorBlock.propTypes = {
  code: Types.node.isRequired,
  scope: Types.shape({}).isRequired,
  display: Types.string,
};

LiveEditorBlock.defaultProps = {
  display: 'horizontal',
};

export default LiveEditorBlock;
