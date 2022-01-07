import Types from 'prop-types';

const StickyLayout = (props) => {
  const { children, stickyContent } = props;

  // const isStickyButton = true;
  //
  // if (isStickyButton) {
  //   component.action.margin = 'xs';
  //
  //   return (
  //     <>
  //       <div className="visible-xs-block visible-sm-block">
  //         <Sticky>
  //           <div className="p-a-2">{getButton(component)}</div>
  //         </Sticky>
  //       </div>
  //
  //       <div className="hidden-xs hidden-sm">{getButton(component)}</div>
  //     </>
  //   );
  // }

  return (
    <div className="sticky-container">
      <div className="sticky-content">
        <div className="sticky-content-scroll">{children}</div>
      </div>
      <div className="sticky-footer">{stickyContent}</div>
    </div>
  );
};

StickyLayout.propTypes = {
  children: Types.node.isRequired,
  stickyContent: Types.node.isRequired,
};

export default StickyLayout;
