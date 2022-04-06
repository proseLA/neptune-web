import PropTypes from 'prop-types';
import { useState } from 'react';

import AccordionItem from './AccordionItem';

const Accordion = ({ items, onClick, indexOpen }) => {
  const [itemsOpen, setItemsOpen] = useState(() =>
    items.map((value, index) => index === indexOpen),
  );
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
      open={itemsOpen[index]}
      onClick={() => handleOnClick(index)}
      {...item}
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
};

Accordion.defaultProps = {
  indexOpen: -1,
  onClick: null,
};

export default Accordion;
