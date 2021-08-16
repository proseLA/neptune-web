import { filterOptionsForQuery } from '..';

const OPTIONS = [
  {
    name: 'test1',
    iso2: 'TT',
    iso3: 'TT1',
    phone: '+93',
  },
  {
    name: 'something',
    iso2: 'ST',
    iso3: 'SMT',
    phone: '+33',
  },
];

describe('filterOptionsForQuery', () => {
  it('filters options based on all properties', () => {
    const option1 = OPTIONS[0];
    const option2 = OPTIONS[1];

    expect(filterOptionsForQuery(OPTIONS, option1.name)).toStrictEqual([option1]);
    expect(filterOptionsForQuery(OPTIONS, option1.iso2)).toStrictEqual([option1]);
    expect(filterOptionsForQuery(OPTIONS, option1.iso3)).toStrictEqual([option1]);
    expect(filterOptionsForQuery(OPTIONS, option1.phone)).toStrictEqual([option1]);
    expect(filterOptionsForQuery(OPTIONS, option2.name)).toStrictEqual([option2]);
    expect(filterOptionsForQuery(OPTIONS, option2.iso2)).toStrictEqual([option2]);
    expect(filterOptionsForQuery(OPTIONS, option2.iso3)).toStrictEqual([option2]);
    expect(filterOptionsForQuery(OPTIONS, option2.phone)).toStrictEqual([option2]);
  });

  it('should return an emtpy array if option cannot be found', () => {
    expect(filterOptionsForQuery(OPTIONS, 'AA')).toStrictEqual([]);
  });
});
