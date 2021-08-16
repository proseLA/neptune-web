import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useRef } from 'react';

import { useHasIntersected } from '../common/hooks';

/**
 * Image component provides a wrapper for image tag. Optional lazy loading functionalities can also be enabled passing prop loading = "lazy.
 * Once element intersects viewport image loads.
 *
 * @param {string} [alt=""] - string that contains the alt text. Required.
 * @param {string} [src=""] - string that contains the src text. Required.
 * @param {string} [id=""] - string that contains the id text.
 * @param {Function} [onLoad=()=>{}] - function that contains load callback. Doesn't fire on SSR https://github.com/facebook/react/issues/15446
 * @param {Function} [onError=()=>{}] - function that contains error callback. Doesn't fire on SSR https://github.com/facebook/react/issues/15446
 * @param {boolean} [loading="lazy"] - This attribute follows the loading API attribute. If set to eager image will load immediately just like a normal image tag otherwise it will lazy load.
 * @usage `<Image alt="alt" src="src" id="id1" onLoad={()=>{}} onError={())=>{}} loading="lazy" />`
 */

export const EmptyTransparentImage =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

const Image = ({ id, src, alt, onLoad, onError, className, loading, stretch, shrink }) => {
  const elementReference = useRef();
  const [hasIntersected] = useHasIntersected({ elRef: elementReference, loading });
  let imageSource = src;
  let imageOnLoad = onLoad;

  if (loading === 'lazy' && !hasIntersected) {
    imageSource = EmptyTransparentImage;
    imageOnLoad = null;
  }

  return (
    <img
      ref={elementReference}
      id={id}
      alt={alt}
      src={imageSource}
      className={classnames([
        'tw-image',
        {
          'tw-image__stretch': stretch,
          'tw-image__shrink': shrink,
        },
        className,
      ])}
      onLoad={imageOnLoad}
      onError={onError}
    />
  );
};

Image.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  stretch: PropTypes.bool,
  shrink: PropTypes.bool,
};

Image.defaultProps = {
  id: null,
  className: '',
  onLoad: () => {},
  onError: () => {},
  loading: 'eager',
  stretch: true,
  shrink: true,
};

export default Image;
