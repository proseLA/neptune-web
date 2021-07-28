const ESCAPED_OPENING_CHEVRON = '&lt;';
const ESCAPED_CLOSING_CHEVRON = '&gt;';

type Tags = {
  transformed: {
    opening: string;
    closing: string;
  };
  escapedRegex: {
    opening: RegExp;
    closing: RegExp;
  };
};

class EmphasisHtmlTransformer {
  tags: Array<Tags>;

  constructor(whitelistedTags: Array<string>) {
    this.tags = (whitelistedTags || []).map((tag) => {
      return {
        transformed: {
          opening: `<span class="emphasis emphasis--${tag}">`,
          closing: '</span>',
        },
        escapedRegex: {
          opening: new RegExp(`${ESCAPED_OPENING_CHEVRON}${tag}${ESCAPED_CLOSING_CHEVRON}`, 'g'),
          closing: new RegExp(`${ESCAPED_OPENING_CHEVRON}/${tag}${ESCAPED_CLOSING_CHEVRON}`, 'g'),
        },
      };
    });
  }

  // Algorithm:
  // 1) Escape all dangerous characters (<,>,&)
  // 2) Replace all escaped, whitelisted tags with styled spans.
  // 3) Transform new line characters to `<br />`s
  //
  // Note: for simplicity this doesn't support tags with non-standard whitespaces, e.g. <positive></ positive>
  transform(unsafe: string): string | null {
    if (!unsafe) {
      return null;
    }

    const safe = unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return this.tags
      .reduce((accumulator, tag) => {
        return accumulator
          .replace(tag.escapedRegex.opening, tag.transformed.opening)
          .replace(tag.escapedRegex.closing, tag.transformed.closing);
      }, safe)
      .replace(/\\n|\n/g, '<br />');
  }
}

export default EmphasisHtmlTransformer;
