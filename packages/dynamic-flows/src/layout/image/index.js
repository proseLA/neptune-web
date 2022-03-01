import { Image } from '@transferwise/components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { isRelativePath } from '../../common/api/utils';
import { useFetcher } from '../../common/contexts/fetcherContext';
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

const getImageSource = async (fetcher, image) => {
  try {
    if (isRelativePath(image.url) || image?.url?.indexOf(`${window?.location?.origin}/`) === 0) {
      return fetcher(image.url, {
        method: 'GET',
        headers: {
          'Content-Type': 'image/*',
          'X-Access-Token': 'Tr4n5f3rw153',
        },
        credentials: 'same-origin',
      })
        .then((response) => response.blob())
        .then(readImageBlobAsDataURL);
    }

    return image.url;
  } catch {
    return image.url;
  }
};

const DynamicImage = (props) => {
  const image = props.component;

  const fetcher = useFetcher();

  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    getImageSource(fetcher, image).then(setImageSource);
  }, [image.url]);

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
  component: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
    margin: marginModel,
    size: PropTypes.string,
  }).isRequired,
};

export default DynamicImage;
