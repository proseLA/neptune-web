import { ReactElement } from 'react';
import EmphasisHtmlTransformer from './EmphasisHtmlTransformer';

const SUPPORTED_TAGS = ['important', 'positive', 'negative', 'warning'];
const emphasisHtmlTransformer = new EmphasisHtmlTransformer(SUPPORTED_TAGS);

type EmphasisProps = {
  text?: string;
};

const Emphasis = ({ text = undefined }: EmphasisProps): ReactElement | null => {
  if (!text) {
    return null;
  }

  const transformedText = emphasisHtmlTransformer.transform(text);
  // eslint-disable-next-line react/no-danger
  return transformedText ? <span dangerouslySetInnerHTML={{ __html: transformedText }} /> : null;
};

export default Emphasis;
