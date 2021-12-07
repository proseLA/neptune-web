import { shallow } from 'enzyme';

import Button from '../../../button';
import ProcessIndicator from '../../../processIndicator';

import ProcessingStep from '.';

describe('ProcessingStep', () => {
  const PROCESSING_STEP_PROPS = {
    isComplete: false,
    isError: false,
    isSuccess: false,
    onAnimationCompleted: jest.fn(),
    onClear: jest.fn(),
    psButtonText: 'psButtonText',
    psProcessingText: 'psProcessingText',
  };
  let component;
  beforeEach(() => {
    component = shallow(<ProcessingStep {...PROCESSING_STEP_PROPS} />);
  });

  it('renders container', () => {
    expect(component.find('.droppable-processing-card')).toHaveLength(1);
  });

  it('renders ProcessIndicator with default status', () => {
    expect(component.find(ProcessIndicator)).toHaveLength(1);
    expect(component.find(ProcessIndicator).props().status).toBe('processing');
  });

  it('renders ProcessIndicator with success status', () => {
    component = shallow(<ProcessingStep {...PROCESSING_STEP_PROPS} isSuccess />);
    expect(component.find(ProcessIndicator).props().status).toBe('succeeded');
  });

  it('renders ProcessIndicator with error status', () => {
    component = shallow(<ProcessingStep {...PROCESSING_STEP_PROPS} isError />);
    expect(component.find(ProcessIndicator).props().status).toBe('failed');
  });

  it('renders psProcessingText', () => {
    expect(component.find('h4').text()).toBe(PROCESSING_STEP_PROPS.psProcessingText);
  });

  it('renders button when psButtonText is set up', () => {
    expect(component.find(Button)).toHaveLength(1);
  });

  it('calls onClear when button is clicked', () => {
    component.find(Button).simulate('click', {});
    expect(PROCESSING_STEP_PROPS.onClear).toHaveBeenCalledTimes(1);
  });
});
