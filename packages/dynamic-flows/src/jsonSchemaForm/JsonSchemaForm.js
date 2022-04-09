import PropTypes from 'prop-types';

import {
  FetcherProviderFromBaseUrl,
  useHasFetcherProvider,
} from '../common/contexts/fetcherContext';

import GenericSchema from './genericSchema';

const JsonSchemaForm = (props) => {
  if (useHasFetcherProvider() || props.baseUrl == null) {
    return <GenericSchema {...props} />;
  }
  return (
    <FetcherProviderFromBaseUrl baseUrl={props.baseUrl}>
      <GenericSchema {...props} />
    </FetcherProviderFromBaseUrl>
  );
};

JsonSchemaForm.propTypes = {
  /**
   * The JSON schema we're trying to satisfy
   */
  schema: PropTypes.shape({}).isRequired,
  /**
   * An initial data model
   */
  model: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.shape({}),
  ]),
  /**
   * Errors should be human readable strings, the object should match the shape of the model.
   */
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.shape({})]),
  /**
   * Fires when the internal data model changes as a result of form interaction.
   *
   * Provide four params:
   *  - model: the new model (for the entire form)
   *  - triggerSchema: the schema that triggered the change
   *  - triggerModel: the model that changed (e.g. some string, number, boolean)
   *  - lastTriggerModel: the previous value of that model)
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Tell the form if it has been submitted, triggering display of any validation failures.
   */
  submitted: PropTypes.bool.isRequired,
  /**
   * Tell the form if it should disable all controls.
   */
  disabled: PropTypes.bool,
  /**
   * Fires when any internal persist async is triggered and API call is underway.
   *
   * Provides a Promise of the persist async call.
   */
  onPersistAsync: PropTypes.func.isRequired,
  /**
   * Specifies the baseUrl of persist async and validation async requests.
   */
  baseUrl: PropTypes.string,
};

JsonSchemaForm.defaultProps = {
  model: null,
  errors: null,
  disabled: false,
  baseUrl: '',
};

export default JsonSchemaForm;
