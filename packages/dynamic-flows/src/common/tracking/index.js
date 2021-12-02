import Types from 'prop-types';
import { createContext, useContext } from 'react';

const EVENT_NAME_PREFIX = 'Dynamic Flow - ';

const getGeneralEventProperties = () => {};

const TrackingContext = createContext({
  onTrackableEvent: () => {},
});

export const TrackingContextProvider = ({ children, onTrackableEvent }) => {
  const onTrackableEventWrapper = (eventName, properties) => {
    const eventNameWrapped = `${EVENT_NAME_PREFIX}${eventName}`;
    const propertiesWrapped = {
      ...getGeneralEventProperties(),
      ...properties,
    };
    onTrackableEvent(eventNameWrapped, propertiesWrapped);
  };

  return (
    <TrackingContext.Provider value={{ onTrackableEvent: onTrackableEventWrapper }}>
      {children}
    </TrackingContext.Provider>
  );
};

TrackingContextProvider.propTypes = {
  children: Types.node,
  onTrackableEvent: Types.func,
};

export function useTracking() {
  const { onTrackableEvent } = useContext(TrackingContext);
  return onTrackableEvent;
}
