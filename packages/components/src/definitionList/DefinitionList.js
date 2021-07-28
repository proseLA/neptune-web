import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Layout } from '../common';

import './DefinitionList.css';

const isLayoutHorizontal = (layout) =>
  [
    Layout.HORIZONTAL_LEFT_ALIGNED,
    Layout.HORIZONTAL_RIGHT_ALIGNED,
    Layout.HORIZONTAL_JUSTIFIED,
  ].indexOf(layout) >= 0;

const alignmentClassMap = {
  [Layout.HORIZONTAL_RIGHT_ALIGNED]: 'text-sm-right',
  [Layout.HORIZONTAL_JUSTIFIED]: 'text-sm-justify',
};

const DefinitionList = ({ definitions, layout, muted }) => (
  <dl
    className={classNames('tw-definition-list d-flex ', {
      'text-muted': muted,
      'flex-column': layout === Layout.VERTICAL_ONE_COLUMN,
      'tw-definition-list--columns flex-column flex-row--sm': layout === Layout.VERTICAL_TWO_COLUMN,
      'tw-definition-list--horizontal flex-column': isLayoutHorizontal(layout),
    })}
  >
    {definitions
      .filter((definition) => definition)
      .map(({ title, value, key }) => (
        <div className="tw-definition-list__item" key={key}>
          <dt>{title}</dt>
          <dd className={alignmentClassMap[layout] || ''}>{value}</dd>
        </div>
      ))}
  </dl>
);

DefinitionList.propTypes = {
  definitions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      value: PropTypes.node.isRequired,
      key: PropTypes.string.isRequired,
    }),
  ),
  layout: PropTypes.oneOf([
    'VERTICAL_TWO_COLUMN',
    'VERTICAL_ONE_COLUMN',
    'HORIZONTAL_JUSTIFIED',
    'HORIZONTAL_LEFT_ALIGNED',
    'HORIZONTAL_RIGHT_ALIGNED',
  ]),
  muted: PropTypes.bool,
};

DefinitionList.defaultProps = {
  definitions: [],
  layout: Layout.VERTICAL_TWO_COLUMN,
  muted: false,
};

export default DefinitionList;
