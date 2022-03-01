import PropTypes from 'prop-types';

import { marginModel, alignModel } from '../models';
import { getTextAlignmentAndMargin } from '../utils';

const DynamicParagraph = (props) => {
  const paragraph = props.component;

  const classes = getTextAlignmentAndMargin(paragraph);

  return <p className={classes}> {paragraph.text} </p>;
};

DynamicParagraph.propTypes = {
  component: PropTypes.shape({
    text: PropTypes.string.isRequired,
    margin: marginModel,
    align: alignModel,
  }).isRequired,
};

export default DynamicParagraph;
