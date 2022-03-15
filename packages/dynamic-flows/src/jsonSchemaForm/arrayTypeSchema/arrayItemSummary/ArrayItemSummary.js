import { Button } from '@transferwise/components';
import PropTypes from 'prop-types';

const ArrayItemSummary = (props) => {
  return (
    <div>
      <h3>{props.summary.title}</h3>
      <p>{props.summary.description}</p>
      <Button> onClick={props.onEdit}</Button>
    </div>
  );
};

ArrayItemSummary.propTypes = {
  summary: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ArrayItemSummary;
