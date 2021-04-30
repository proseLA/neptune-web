import React from 'react';
import Types from 'prop-types';

import { Markdown, Popover, Position } from '@transferwise/components';
import { HelpCircle as HelpIcon } from '@transferwise/icons';

const Help = (props) => {
  return (
    <Popover content={<Markdown>{props.help.markdown}</Markdown>} preferredPlacement={Position.TOP}>
      <span className="m-l-1">
        <HelpIcon size={16} filled className="d-inline-block" />
      </span>
    </Popover>
  );
};

Help.propTypes = {
  help: Types.shape({ markdown: Types.string }).isRequired,
};

export default Help;
