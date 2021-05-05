/* eslint-disable no-console */
import { componentsPackageName, defaultPrintOptions, getLiteralType } from './utils';

const Scroll = 'Scroll';
const sizeCase = { old: 'Size', new: 'Size' };
const priorityCase = { old: 'Priority', new: 'Priority' };
const positionCase = { old: 'Position', new: 'Position' };
const monthFormatCase = { old: 'MonthFormat', new: 'MonthFormat' };
const layoutCase = { old: 'Layout', new: 'Layout' };
const statusCase = { old: 'Status', new: 'Status' };

const breakingChangesMap = [
  {
    component: 'Avatar',
    enums: [sizeCase, { old: 'Type', new: 'AvatarType' }, { old: 'Theme', new: 'Theme' }],
  },
  {
    component: 'Loader',
    enums: [sizeCase],
  },
  {
    component: 'Badge',
    enums: [sizeCase, { old: 'Border', new: 'Theme' }],
  },
  {
    component: 'Alert',
    enums: [
      { old: 'Type', new: 'Sentiment' },
      { old: 'ArrowPosition', new: 'AlertArrowPosition' },
    ],
  },
  {
    component: 'Button',
    enums: [priorityCase, sizeCase],
  },
  {
    component: 'Chevron',
    enums: [{ old: 'Orientation', new: 'Position' }, sizeCase],
  },
  {
    component: 'CircularButton',
    enums: [{ old: 'Type', new: 'ControlType' }, priorityCase],
  },
  {
    component: 'AvatarWrapper',
    enums: [{ old: 'ProfileType', new: 'ProfileType' }],
  },
  {
    component: 'DateInput',
    enums: [sizeCase, { old: 'DateMode', new: 'DateMode' }, monthFormatCase],
  },
  {
    component: 'DateLookup',
    enums: [sizeCase, monthFormatCase],
  },
  {
    component: 'Decision',
    enums: [
      { old: 'Presentation', new: 'DecisionPresentation' },
      { old: 'Type', new: 'DecisionType' },
      sizeCase,
    ],
  },
  {
    component: 'DefinitionList',
    enums: [layoutCase],
  },
  {
    component: 'Drawer',
    enums: [positionCase],
  },
  {
    component: 'DynamicFieldDefinitionList',
    enums: [layoutCase],
  },
  {
    component: 'Info',
    enums: [sizeCase, { old: 'Presentation', new: 'InfoPresentation' }],
  },
  {
    component: 'InlineAlert',
    enums: [{ old: 'Type', new: 'Sentiment' }],
  },
  {
    component: 'Modal',
    enums: [sizeCase, positionCase, { old: Scroll, new: Scroll }],
  },
  {
    component: 'PhoneNumberInput',
    enums: [sizeCase],
  },
  {
    component: 'Popover',
    enums: [{ old: 'Placement', new: 'Position' }],
  },
  {
    component: 'ProcessIndicator',
    enums: [statusCase, sizeCase],
  },
  {
    component: 'Summary',
    enums: [statusCase],
  },
  {
    component: 'Tabs',
    enums: [
      { old: 'SpacerSizes', new: 'Size' },
      { old: 'HeaderWidth', new: 'Width' },
    ],
  },
  {
    component: 'Tile',
    enums: [sizeCase],
  },
  {
    component: 'Tooltip',
    enums: [positionCase],
  },
  {
    component: 'Typeahead',
    enums: [sizeCase, { old: 'Type', new: 'Sentiment' }],
  },
  {
    component: 'Upload',
    enums: [{ old: 'UploadStep', new: 'UploadStep' }],
  },
];

const ButtonTypeBreakingChange = {
  Type: ['PRIMARY', 'PAY', 'SECONDARY', 'DANGER', 'LINK'],
  ControlType: ['ACCENT', 'POSITIVE', 'NEGATIVE'],
};

export default function codemod(file, api, options) {
  const literalType = getLiteralType(options.parser);
  const j = api.jscodeshift;
  const fileTree = j(file.source);

  let hasModifications = false;
  breakingChangesMap.forEach(({ component, enums }) => {
    const componentImport = fileTree
      .find(j.ImportDeclaration, {
        source: {
          type: literalType,
          value: componentsPackageName,
        },
      })
      .find(j.Identifier, {
        name: component,
      });

    if (componentImport.size() > 0) {
      enums.forEach((enumItem) => {
        let newEnum = enumItem.new;
        fileTree
          .find(j.MemberExpression, {
            object: {
              type: 'Identifier',
              name: component,
            },
            property: {
              type: 'Identifier',
              name: enumItem.old,
            },
          })
          .replaceWith((node) => {
            hasModifications = true;
            // cover Button's edge case
            if (component === 'Button') {
              const enumItemValue = node.parentPath.node.property.name;
              if (
                enumItemValue === 'ACCENT' ||
                enumItemValue === 'POSITIVE' ||
                enumItemValue === 'NEGATIVE'
              ) {
                // use `ControlType` instead of `Type` in above cases
                newEnum = 'ControlType';
              }
            }
            return j.jsxIdentifier(newEnum);
          });

        if (hasModifications) {
          hasModifications = false;
          // check whether we already added this enum into import statement
          const enumImports = fileTree
            .find(j.ImportDeclaration, {
              source: {
                type: literalType,
                value: componentsPackageName,
              },
            })
            .find(j.Identifier, {
              name: newEnum,
            });

          if (enumImports.size() === 0) {
            // add import for `newEnum`
            fileTree
              .find(j.ImportDeclaration, {
                source: {
                  type: literalType,
                  value: componentsPackageName,
                },
              })
              .forEach((paths) => {
                paths.value.specifiers.push(j.importSpecifier(j.identifier(newEnum)));
              });
          }

          // do we still need import component?
          const isComponentNotUsedAtJsx =
            fileTree
              .find(j.JSXElement, {
                openingElement: {
                  name: {
                    type: 'JSXIdentifier',
                    name: component,
                  },
                },
              })
              .size() === 0;

          if (isComponentNotUsedAtJsx) {
            // delete component from import statement
            fileTree
              .find(j.ImportDeclaration, {
                source: {
                  type: literalType,
                  value: componentsPackageName,
                },
              })
              .find(j.Identifier, {
                name: component,
              })
              .remove();
          }
        }
      });
    }
  });

  [...ButtonTypeBreakingChange.Type, ...ButtonTypeBreakingChange.ControlType].forEach(
    (enumItemValue) => {
      fileTree
        .find(j.MemberExpression, {
          object: {
            property: {
              name: 'Type',
            },
          },
          property: {
            name: enumItemValue,
          },
        })
        .replaceWith(() => {
          const newProp = ButtonTypeBreakingChange.Type.includes(enumItemValue)
            ? 'Type'
            : 'ControlType';

          const enumImports = fileTree
            .find(j.ImportDeclaration, {
              source: {
                type: literalType,
                value: componentsPackageName,
              },
            })
            .find(j.Identifier, {
              name: newProp,
            });
          if (enumImports.size() === 0) {
            fileTree
              .find(j.ImportDeclaration, {
                source: {
                  type: literalType,
                  value: componentsPackageName,
                },
              })
              .forEach((paths) => {
                paths.value.specifiers.push(j.importSpecifier(j.identifier(newProp)));
              });
          }
          return j.jsxIdentifier(`${newProp}.${enumItemValue}`);
        });
    },
  );

  return fileTree.toSource(defaultPrintOptions);
}
