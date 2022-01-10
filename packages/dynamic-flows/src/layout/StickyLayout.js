import Types from 'prop-types';

const StickyLayout = (props) => {
  const { children, stickyContent } = props;

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
