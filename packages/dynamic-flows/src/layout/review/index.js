import { DefinitionList } from '@transferwise/components';
import Types from 'prop-types';

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

  const margin = getMarginBottom(review.margin || 'lg');

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
      <h6 className="m-b-2">
        {review.title}
        {review.action && getReviewAction(review.action)}
      </h6>
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
  onAction: Types.func.isRequired,
  component: Types.shape({
    title: Types.string,
    fields: Types.arrayOf(
      Types.shape({
        label: Types.string,
        value: Types.string,
      }),
    ).isRequired,
    margin: marginModel,
    action: actionModel,
    orientation: orientationModel,
  }).isRequired,
};

export default DynamicReview;
