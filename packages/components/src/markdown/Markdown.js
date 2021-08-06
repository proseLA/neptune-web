import PropTypes from 'prop-types';
import commonmark from 'commonmark';
import difference from 'lodash.difference';
import { logActionRequired } from '../utilities';
import { MarkdownNodeType } from '../common';

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer({ safe: true });

const NODE_TYPE_LIST = Object.values(MarkdownNodeType);

const Markdown = ({ as: Element, children, className, allowList, blockList }) => {
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
    const parsed = parser(children);
    return writer.render(parsed);
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
};

Markdown.defaultProps = {
  as: 'div',
  className: undefined,
  allowList: null,
  blockList: null,
};

export default Markdown;
