import { Decision, Avatar, DecisionPresentation, DecisionType } from '@transferwise/components';
import { ReactElement } from 'react';

// @ts-expect-error liveEditorCode
import code from '../../../liveEditorCode/decision.code';
import { LiveEditorBlock, GeneratePropsTable } from '../../../utils';

const PageContent = (): ReactElement => {
  return (
    <>
      <p>
        Decision can be used for illustrating major decisions for the user. Because blocks will not
        wrap onto multiple lines, we suggest keeping the number of options under four when using
        presentation <code>LIST_BLOCK</code>.
      </p>
      <p>
        When you need to present more than four blocks, you can use <code>LIST_BLOCK_GRID</code>{' '}
        presentation.
      </p>
      <LiveEditorBlock
        code={code as string}
        scope={{ Decision, Avatar, DecisionPresentation, DecisionType }}
        display="vertical"
      />
      <p>
        Decision can be used for illustrating major decisions for the user. Because blocks will not
        wrap onto multiple lines, we suggest keeping the number of options under four when using
        presentation <code>LIST_BLOCK</code>.
      </p>
      <GeneratePropsTable componentName="Decision" />
    </>
  );
};

export const meta = {
  name: 'Decision',
};

export default PageContent;
