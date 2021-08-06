/**
 * Defined in `Dimmer.less`
 */
const NO_SCROLL_BODY_CLASS = 'no-scroll';

/**
 * Apply {@link NO_SCROLL_BODY_CLASS} that disables scroll on page (e.g use in Dimmer to disable scroll behind the component)
 *
 * For a proper disabling, the CSS class needs to be applied for `html` and `body` elements.
 */
export const addNoScrollBodyClass = () => {
  document.documentElement.classList.add(NO_SCROLL_BODY_CLASS);
  document.body.classList.add(NO_SCROLL_BODY_CLASS);
};

/**
 * Clean up after {@link addNoScrollBodyClass} function
 */
export const removeNoScrollBodyClass = () => {
  document.documentElement.classList.remove(NO_SCROLL_BODY_CLASS);
  document.body.classList.remove(NO_SCROLL_BODY_CLASS);
};
