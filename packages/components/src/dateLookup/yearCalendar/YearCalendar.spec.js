import { shallow } from 'enzyme';

import DateHeader from '../dateHeader';

import YearCalendarTable from './table';

import YearCalendar from '.';

describe('YearCalendar', () => {
  const selectedDate = new Date(2018, 11, 27);
  const min = new Date(1990, 11, 27);
  const max = new Date(2020, 11, 27);
  let component;
  let props;

  beforeEach(() => {
    props = {
      selectedDate,
      min,
      max,
      viewYear: 2018,
      placeholder: 'Enter date..',
      onSelect: jest.fn(),
      onViewDateUpdate: jest.fn(),
    };
    component = shallow(<YearCalendar {...props} />);
  });

  it('shows the header', () => {
    expect(header()).toHaveLength(1);
  });

  it('passes selectPreviousYears to header component', () => {
    expect(header().prop('onPreviousClick')).toBe(component.instance().selectPreviousYears);
  });

  it('passes selectNextYears header component', () => {
    expect(header().prop('onNextClick')).toBe(component.instance().selectNextYears);
  });

  it('calls onViewDateUpdate on previous years select', () => {
    component.instance().selectPreviousYears();
    expect(props.onViewDateUpdate).toHaveBeenCalledWith({ year: 1998 });
  });

  it('calls onViewDateUpdate on next years select', () => {
    component.instance().selectNextYears();
    expect(props.onViewDateUpdate).toHaveBeenCalledWith({ year: 2038 });
  });

  it('shows year calendar table', () => {
    expect(table()).toHaveLength(1);
  });

  it('passes props forward to table component', () => {
    expect(table().prop('selectedDate')).toBe(selectedDate);
    expect(table().prop('min')).toBe(min);
    expect(table().prop('max')).toBe(max);
    expect(table().prop('viewYear')).toBe(2018);
    expect(table().prop('placeholder')).toBe('Enter date..');
  });

  it('passes onYearSelect to table component', () => {
    expect(table().prop('onSelect')).toBe(component.instance().onYearSelect);
  });

  it('calls onViewDateUpdate and onSelect on year select', () => {
    component.instance().onYearSelect(1990);
    expect(props.onViewDateUpdate).toHaveBeenCalledWith({ year: 1990 });
    expect(props.onSelect).toHaveBeenCalledTimes(1);
  });

  const header = () => component.find(DateHeader);
  const table = () => component.find(YearCalendarTable);
});
