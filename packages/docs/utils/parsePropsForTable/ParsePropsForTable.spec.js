import propsData from '../../temp-tabular-props';

import ParsePropsForTable from './ParsePropsForTable';

describe('ParsePropsForTable', () => {
  it('should return correct value for prop type', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.type)).toStrictEqual({
      type: 'enum',
      allowedValues: 'Object.values(FormControlType)',
      defaultValue: 'FormControlType.TEXT',
      required: false,
    });
  });

  it('should return correct value for prop name', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.name)).toStrictEqual({
      type: 'string',
      allowedValues: '-',
      defaultValue: '-',
      required: true,
    });
  });

  it('should return correct value for prop options', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.options)).toStrictEqual({
      type: 'arrayOf',
      allowedValues: '{label, value, secondary}',
      defaultValue: '[]',
      required: false,
    });
  });

  it('should return correct value for prop mode', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.mode)).toStrictEqual({
      type: 'enum',
      allowedValues: ['DateMode.DAY_MONTH_YEAR', 'DateMode.MONTH_YEAR'],
      defaultValue: 'DateMode.DAY_MONTH_YEAR',
      required: false,
    });
  });

  it('should return correct value for prop value', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.value)).toStrictEqual({
      type: 'union',
      allowedValues: ['string', 'number', 'bool', 'object'],
      defaultValue: 'null',
      required: false,
    });
  });

  it('should return correct value for prop uploadProps', () => {
    expect(ParsePropsForTable(propsData.FormControl.props.uploadProps)).toStrictEqual({
      type: 'shape',
      allowedValues:
        '[{"animationDelay":"number"},{"csButtonText":"string"},{"csFailureText":"string"},{"csSuccessText":"string"},{"csTooLargeMessage":"string"},{"csWrongTypeMessage":"string"},{"httpOptions":"shape"},{"maxSize":"number"},{"onCancel":"func"},{"onFailure":"func"},{"onStart":"func"},{"onSuccess":"func"},{"psButtonText":"string"},{"psFailureText":"string"},{"psProcessingText":"string"},{"psSuccessText":"string"},{"size":"string"},{"usAccept":"enum"},{"usButtonText":"string"},{"usDisabled":"bool"},{"usDropMessage":"string"},{"usHelpImage":"string"},{"usLabel":"string"},{"usPlaceholder":"string"}]',
      defaultValue: '{}',
      required: false,
    });
  });

  it('should return correct value for Box children prop', () => {
    expect(ParsePropsForTable(propsData.Box.props.children)).toStrictEqual({
      type: 'union',
      allowedValues: ['arrayOf', 'node'],
      defaultValue: 'null',
      required: false,
    });
  });

  it('should return correct value for Box customMediaQueries prop', () => {
    expect(ParsePropsForTable(propsData.Box.props.customMediaQueries)).toStrictEqual({
      type: 'arrayOf',
      allowedValues: '{name}',
      defaultValue: 'mediaQueries',
      required: false,
    });
  });
});
