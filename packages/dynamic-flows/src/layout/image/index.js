import { Image } from '@transferwise/components';
import Types from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

import { useHttpClient } from '../../common/contexts/httpClientContext/httpClientContext';
import { marginModel } from '../models';
import { getMarginBottom } from '../utils';

const getWrapperClasses = (component) => {
  switch (component.size) {
    case 'xs':
      return 'col-xs-2 col-xs-offset-5';
    case 'sm':
      return 'col-xs-4 col-xs-offset-4';
    case 'md':
      return 'col-xs-6 col-xs-offset-3';
    case 'lg':
      return 'col-xs-8 col-xs-offset-2';
    case 'xl':
    default:
      return 'col-xs-12';
  }
};

const getImageClasses = (image) => {
  const margin = getMarginBottom(image.margin || 'lg');
  return `img-responsive ${margin}`;
};

const readImageBlobAsDataURL = (imageBlob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('loadend', () => resolve(reader.result));
    reader.addEventListener('error', (error) => reject(error));

    reader.readAsDataURL(imageBlob);
  });

const DynamicImage = (props) => {
  const image = props.component;

  const httpClient = useHttpClient();

  const [imageSource, setImageSource] = useState('');

  const getImageSource = useCallback(
    async (image) => {
      try {
        if (isDifferentOriginThanWindowLocation(image.url)) {
          return image.url;
        }

        return httpClient
          .request({
            url: image.url,
            method: 'GET',
            contentType: 'image/*',
            credentials: 'same-origin',
          })
          .then((response) => {
            return response.blob();
          })
          .then((blob) => {
            return readImageBlobAsDataURL(blob);
          })
          .catch((error) => {
            return image.url;
          });
      } catch {
        return image.url;
      }
    },
    [httpClient],
  );

  useEffect(() => {
    getImageSource(image).then(setImageSource);
  }, [getImageSource, image, setImageSource]);

  const imageProps = {
    alt: image.text,
    src: imageSource,
    stretch: true,
    shrink: true,
  };

  const getImage = () =>
    imageSource ? <Image className={getImageClasses(image)} {...imageProps} /> : null;

  if (!image.size || image.size === 'xl') {
    return getImage();
  }

  return (
    <div className="row m-b-0">
      <div className={getWrapperClasses(image)}>{getImage()}</div>
    </div>
  );
};

DynamicImage.propTypes = {
  component: Types.shape({
    text: Types.string,
    url: Types.string,
    margin: marginModel,
    size: Types.string,
  }).isRequired,
};

export default DynamicImage;

function startsWithHTTP(url = '') {
  return ['https://', 'http://', 'data:'].some(
    (prefix) => url.slice(0, prefix.length) === prefix && url.length > prefix.length,
  );
}

function isDifferentOriginThanWindowLocation(url) {
  return startsWithHTTP(url) && new URL(url).origin !== window?.location?.origin;
}
