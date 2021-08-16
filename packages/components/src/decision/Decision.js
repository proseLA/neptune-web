import classNames from 'classnames';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';

import { Size, Breakpoint } from '../common';
import { useDirection } from '../common/hooks';
import NavigationOption from '../navigationOption';
import SizeSwapper from '../sizeSwapper';
import Tile from '../tile';

import { Presentation, Type } from './decisionEnums';

const Decision = ({ options, presentation, type, size }) => {
  const { isRTL } = useDirection();
  if (type === Type.NAVIGATION) {
    const { LIST_BLOCK, LIST_BLOCK_GRID } = Presentation;
    if (presentation === LIST_BLOCK || presentation === LIST_BLOCK_GRID) {
      const isSmall = size === Size.SMALL;
      const isGrid = presentation === LIST_BLOCK_GRID;
      const items = [
        {
          items: [],
          layout: SizeSwapper.Layout.COLUMN,
        },
        {
          items: [],
          breakpoint: isSmall ? Breakpoint.EXTRA_SMALL : Breakpoint.SMALL,
          wrap: isGrid,
        },
      ];

      options.forEach(
        ({ description, disabled, href, target, media: { block, list }, onClick, title }, key) => {
          items[0].items.push(
            <NavigationOption
              // eslint-disable-next-line react/no-array-index-key
              key={`nav-${key}`}
              complex={false}
              content={description}
              disabled={disabled}
              href={href}
              target={target}
              media={list}
              showMediaAtAllSizes
              title={title}
              onClick={onClick}
            />,
          );
          items[1].items.push(
            <Tile
              // eslint-disable-next-line react/no-array-index-key
              key={`tile-${key}`}
              className={classNames(`np-decision__tile${isSmall ? '--small' : ''}`, {
                'np-decision__tile--fixed-width': isGrid,
              })}
              description={description}
              disabled={disabled}
              href={href}
              target={target}
              media={block}
              size={isSmall ? Size.SMALL : Size.MEDIUM}
              title={title}
              onClick={onClick}
            />,
          );
        },
      );

      return (
        <div
          className={classNames('np-decision', {
            'np-decision--small': isSmall,
            'np-decision--grid': isGrid,
            'np-decision--rtl': isRTL,
          })}
        >
          <SizeSwapper items={items} />
        </div>
      );
    }
    // LIST
    return options.map(
      ({ title, description, disabled, href, target, media: { list }, onClick }, key) => (
        <NavigationOption
          // eslint-disable-next-line react/no-array-index-key
          key={`nav-${key}`}
          complex={false}
          content={description}
          disabled={disabled}
          href={href}
          target={target}
          media={list}
          showMediaAtAllSizes
          title={title}
          onClick={onClick}
        />
      ),
    );
  }
  return <></>;
};

Decision.propTypes = {
  /**  A list of elements to be rendered */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.node,
      disabled: PropTypes.bool,
      href: requiredIf(PropTypes.string, (props) => props.type === Type.NAVIGATION),
      target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
      media: PropTypes.shape({
        block: PropTypes.node.isRequired,
        list: PropTypes.node.isRequired,
      }),
      onClick: PropTypes.func.isRequired,
      title: PropTypes.node.isRequired,
    }),
  ).isRequired,
  /**  Handles the display mode of the component */
  presentation: PropTypes.oneOf(['LIST', 'LIST_BLOCK', 'LIST_BLOCK_GRID']),
  /** Size currently affects only Tile dimension */
  size: PropTypes.oneOf(['sm', 'md']),
  /** Decide which kind of element type needs to be rendered ex: Navigation Options or in the future Radio or Checkbox Options */
  type: PropTypes.oneOf(['NAVIGATION']),
};

Decision.defaultProps = {
  presentation: Presentation.LIST,
  size: Size.MEDIUM,
  type: Type.NAVIGATION,
};

export default Decision;
