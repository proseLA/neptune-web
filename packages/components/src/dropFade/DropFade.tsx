import React, { useRef, useState, ReactElement } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

const DropFade = ({ children, show }: { children: ReactElement; show: boolean }) => {
  const reference = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  const clonedChild = React.cloneElement(children, { ref: reference });

  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="np-dropfade"
      onEntering={() => {
        // Set height so we can animate to the correct height
        setHeight(reference?.current?.scrollHeight || 0);
      }}
      // Un-set height, as we don't want to presume it should be that height forever
      onEntered={() => setHeight(undefined)}
      onExit={() => {
        setHeight(reference?.current?.scrollHeight || 0);
      }}
      onExiting={() => {
        setHeight(0);
      }}
    >
      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div style={{ height }} className="np-dropfade">
        {clonedChild}
      </div>
    </CSSTransition>
  );
};

export default DropFade;
