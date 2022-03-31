import commonmark from 'commonmark';
import difference from 'lodash.difference';
import PropTypes from 'prop-types';

import { MarkdownNodeType } from '../common';
import { logActionRequired } from '../utilities';

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer({ safe: true });

const NODE_TYPE_LIST = Object.values(MarkdownNodeType);

const Markdown = ({ as: Element, children, className, allowList, blockList, config }) => {
  if (!children) {
    return null;
  }

  if (allowList?.length && blockList?.length) {
    logActionRequired(
      'Markdown supports only one of `allowList` or `blockList` to be used at a time. `blockList` will be ignored.',
    );
  }

  const parser = (nodes) => {
    const parsed = reader.parse(nodes);
    if (allowList || blockList) {
      const toExclude = allowList ? difference(NODE_TYPE_LIST, allowList) : blockList;
      return stripNodes({ parsed, blockList: toExclude });
    }
    return parsed;
  };

  const createMarkup = () => {
    const {
      link: { target },
    } = config;

    const parsed = parser(children);
    return writer.render(parsed).replace(/<a href="/g, `<a target="${target}" href="`);
  };

  return <Element className={className} dangerouslySetInnerHTML={{ __html: createMarkup() }} />;
};

function stripNodes({ blockList, parsed }) {
  if (!parsed) {
    return parsed;
  }

  const walker = parsed.walker();
  let event = walker.next();

  while (event) {
    const { node } = event;
    if (blockList.includes(node.type)) {
      if (!event.entering) {
        while (node.firstChild) {
          node.insertBefore(node.firstChild);
        }
        node.unlink();
      }
    }
    event = walker.next();
  }
  return walker.root;
}

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  allowList: PropTypes.arrayOf(
    PropTypes.oneOf([
      'block_quote',
      'code_block',
      'code',
      'emph',
      'heading',
      'html_block',
      'html_inline',
      'image',
      'item',
      'linebreak',
      'link',
      'list',
      'paragraph',
      'softbreak',
      'strong',
      'thematic_break',
    ]),
  ),
  blockList: PropTypes.arrayOf(
    PropTypes.oneOf([
      'block_quote',
      'code_block',
      'code',
      'emph',
      'heading',
      'html_block',
      'html_inline',
      'image',
      'item',
      'linebreak',
      'link',
      'list',
      'paragraph',
      'softbreak',
      'strong',
      'thematic_break',
    ]),
  ),
  config: PropTypes.shape({
    link: PropTypes.shape({
      target: PropTypes.oneOf(['_blank', '_self']),
    }),
  }),
};

Markdown.defaultProps = {
  as: 'div',
  className: undefined,
  allowList: null,
  blockList: null,
  config: {
    link: {
      target: '_self',
    },
  },
};

export default Markdown;
