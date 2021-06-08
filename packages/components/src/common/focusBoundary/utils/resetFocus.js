/**
 * This function resets the focus to either last of first focusable elements within a node.
 *
 * @param {Object} focusableEls - contains the first last of first focusable elements within a node.
 * @param {Object} event - the triggered event
 */

export const resetFocus = ({ focusableEls: { first, last }, event }) => {
  const { activeElement } = document;
  if (event.shiftKey && activeElement === first) {
    if (last) {
      last.focus();
    }
    event.preventDefault();
  }

  if (!event.shiftKey && activeElement === last) {
    if (first) {
      first.focus();
    }
    event.preventDefault();
  }
};
