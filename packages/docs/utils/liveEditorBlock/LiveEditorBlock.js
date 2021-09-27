import { CheckboxButton } from '@transferwise/components';
import Types from 'prop-types';
import React, { useRef } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import theme from '../prismTheme';

const LiveEditorBlock = ({ code, scope, display }) => {
  const [tabEnabled, setTabEnabled] = React.useState(false);
  const inputReference = useRef();

  const handleKeyDown = (event) => {
    if (event.keyCode === 9 && !tabEnabled) {
      event.preventDefault();
      inputReference.current?.focus();
    }
  };

  const checkbox = (
    <label htmlFor="tab-check" className="m-b-1 pull-right">
      <CheckboxButton
        ref={inputReference}
        id="tab-check"
        aria-label="Enable tab key"
        checked={tabEnabled}
        className="m-r-1"
        onChange={() => setTabEnabled(!tabEnabled)}
      />
      <span>Enable tab key</span>
    </label>
  );

  return (
    <div
      // react-live is broken at RTL mode
      // and it doesn't have support for this feature (e.g can't be configured via some prop) either
      // so enforcing LTR mode in any case
      dir="ltr"
      className="row live-provider"
    >
      <LiveProvider code={code} scope={scope}>
        {display === 'vertical' ? (
          <>
            <div className="col-xs-12 live-preview m-b-5 p-x-0">
              <LivePreview />
            </div>
            <div className="col-xs-12 live-editor m-b-5">
              <LiveEditor theme={theme} onKeyDown={handleKeyDown} />
              {checkbox}
            </div>
          </>
        ) : (
          <>
            <div className="col-xl-6 live-editor">
              <LiveEditor theme={theme} onKeyDown={handleKeyDown} />
              {checkbox}
            </div>
            <div className="col-xl-6 live-preview">
              <LivePreview />
            </div>
          </>
        )}
        <div className="col-xs-12">
          <LiveError className="m-t-3" />
        </div>
      </LiveProvider>
    </div>
  );
};

LiveEditorBlock.propTypes = {
  code: Types.node.isRequired,
  scope: Types.shape({}).isRequired,
  display: Types.string,
};

LiveEditorBlock.defaultProps = {
  display: 'horizontal',
};

export default LiveEditorBlock;
