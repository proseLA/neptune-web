import { DefinitionList } from '@transferwise/components';
import PropTypes from 'prop-types';

import { marginModel, actionModel, orientationModel } from '../models';
import { getMarginBottom } from '../utils';

const mapFieldsToDefinitions = ({ label, value }, index) => {
  return { key: String(index), title: label, value };
};

const getReviewLayout = (orientation) => {
  if (orientation === 'horizontal') {
    return 'HORIZONTAL_RIGHT_ALIGNED';
  }
  return 'VERTICAL_ONE_COLUMN';
};

const DynamicReview = (props) => {
  const review = props.component;

  const margin = getMarginBottom(review.margin || 'xs');

  const onActionClick = (event) => {
    event.preventDefault();
    props.onAction(review.action);
  };

  const getReviewAction = (action) => {
    return (
      <a href={action.url} className="pull-right" role="button" onClick={onActionClick}>
        {action.title}
      </a>
    );
  };

  return (
    <>
      {review.title && (
        <h6 className="m-b-2">
          {review.title}
          {review.action && getReviewAction(review.action)}
        </h6>
      )}
      <div className={margin}>
        <DefinitionList
          layout={getReviewLayout(review.orientation)}
          definitions={review.fields.map(mapFieldsToDefinitions)}
        />
      </div>
    </>
  );
};

DynamicReview.propTypes = {
  onAction: PropTypes.func.isRequired,
  component: PropTypes.shape({
    title: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      }),
    ).isRequired,
    margin: marginModel,
    action: actionModel,
    orientation: orientationModel,
  }).isRequired,
};

export default DynamicReview;
