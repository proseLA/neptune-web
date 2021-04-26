/**
 * This function returns the first and the last focusable elements within a node.
 *
 * @param {Node} focusBoundaryContainer - the area that contains focused elements.
 * @returns {Object} focusableEls - which contains the first focusable element and the last focusable element. First and last can be the same element if area contains one or none focusable element.
 */

export const getFocusableElements = (focusBoundaryContainer) => {
  const focusableEls = { first: focusBoundaryContainer, last: focusBoundaryContainer };

  if (focusBoundaryContainer?.querySelectorAll) {
    const allEls = [
      ...focusBoundaryContainer.querySelectorAll(
        'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"]',
      ),
    ].filter((el) => !el.hasAttribute('disabled'));

    if (allEls.length) {
      [focusableEls.first] = allEls;
      focusableEls.last = allEls[allEls.length - 1];
    }
  }

  return focusableEls;
};
