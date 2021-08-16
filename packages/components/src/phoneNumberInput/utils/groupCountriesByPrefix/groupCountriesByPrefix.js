import { isArray } from '@transferwise/neptune-validation';

export const groupCountriesByPrefix = (countries) => {
  const groupedArray = countries.reduce((accumulator, country) => {
    const { name, iso2, iso3, phone } = country;
    if (accumulator[phone]) {
      const previousValue = accumulator[phone];
      accumulator[phone] = {
        ...previousValue,
        name: isArray(previousValue.name)
          ? [...previousValue.name, name]
          : [previousValue.name, name],
        iso2: isArray(previousValue.iso2)
          ? [...previousValue.iso2, iso2]
          : [previousValue.iso2, iso2],
        iso3: isArray(previousValue.iso3)
          ? [...previousValue.iso3, iso3]
          : [previousValue.iso3, iso3],
      };
    } else {
      accumulator[phone] = country;
    }
    return accumulator;
  }, {});
  return Object.values(groupedArray);
};
