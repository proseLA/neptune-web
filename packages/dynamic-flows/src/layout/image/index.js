import { Image } from '@transferwise/components';
import Types from 'prop-types';

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

const DynamicImage = (props) => {
  const image = props.component;

  const imageProps = {
    alt: image.text,
    src: image.url,
    stretch: true,
    shrink: true,
  };

  if (!image.size || image.size === 'xl') {
    return <Image className={getImageClasses(image)} {...imageProps} />;
  }

  return (
    <div className="row m-b-0">
      <div className={getWrapperClasses(image)}>
        <Image className={getImageClasses(image)} {...imageProps} />
      </div>
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
