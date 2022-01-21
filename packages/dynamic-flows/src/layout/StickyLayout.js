import Types from 'prop-types';

export const isPositionStickySupported = () => {
  return window?.CSS?.supports('position', 'sticky');
};

const StickyLayout = (props) => {
  const { children, stickyContent } = props;

  return (
    <>
      {children}
      <div className="sticky-footer">{stickyContent}</div>
    </>
  );
};

StickyLayout.propTypes = {
  children: Types.node.isRequired,
  stickyContent: Types.node.isRequired,
};

export default StickyLayout;
