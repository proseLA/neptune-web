import React, { useState } from 'react';

import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';
import { Theme } from '../common';
import './Accordion.css';

const Accordion = ({ items, onClick, indexOpen, theme }) => {
  const [itemsOpen, setItemsOpen] = useState(() => items.map((val, index) => index === indexOpen));
  const handleOnClick = (index) => {
    if (onClick) {
      onClick(index);
    }
    const newItems = [...itemsOpen];
    newItems[index] = !itemsOpen[index];
    setItemsOpen(newItems);
  };

  return items.map((item, index) => (
    <AccordionItem
      key={item.id || index}
      onClick={() => handleOnClick(index)}
      open={itemsOpen[index]}
      {...item}
      theme={theme}
    />
  ));
};

Accordion.propTypes = {
  indexOpen: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
      icon: PropTypes.node,
    }),
  ).isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['light', 'dark']),
};

Accordion.defaultProps = {
  indexOpen: -1,
  onClick: null,
  theme: Theme.LIGHT,
};

export default Accordion;
