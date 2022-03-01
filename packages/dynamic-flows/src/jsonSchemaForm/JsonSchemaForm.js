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
   * The user's locale, this will affect the rendering of some components e.g. dates.
   */
  locale: PropTypes.string,
  /**
   * Translations used to enhance components.
   */
  translations: PropTypes.shape({}),
  /**
   * Fires when the internal data model changes as a result of form interaction.
   *
   * Provide two params the new model, and a boolean indicating if it's valid.
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
   * Provides a QueryablePromise of the persist async call.
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
  locale: 'en-GB',
  translations: {},
  disabled: false,
  baseUrl: '',
};

export default JsonSchemaForm;
