import EmphasisHtmlTransformer from './EmphasisHtmlTransformer';

describe('creates safe, enphasised html', () => {
  it('sanitises <, > and & characters', () => {
    const emphasisHtmlTransformer = new EmphasisHtmlTransformer();
    expect(
      emphasisHtmlTransformer.transform(
        '<script>something malicious</script><p>some text & more text</p>',
      ),
    ).toEqual(
      '&lt;script&gt;something malicious&lt;/script&gt;&lt;p&gt;some text &amp; more text&lt;/p&gt;',
    );
  });

  it('handles whitelisted tags', () => {
    const emphasisHtmlTransformer = new EmphasisHtmlTransformer(['positive', 'negative']);
    expect(
      emphasisHtmlTransformer.transform(
        '<script>something malicious</script><positive>hello</positive><negative>world</negative><positive>!</positive>',
      ),
    ).toEqual(
      '&lt;script&gt;something malicious&lt;/script&gt;<span class="emphasis emphasis--positive">hello</span><span class="emphasis emphasis--negative">world</span><span class="emphasis emphasis--positive">!</span>',
    );
  });

  describe('supports new line characters', () => {
    it('supports slash n in the string', () => {
      const emphasisHtmlTransformer = new EmphasisHtmlTransformer();
      expect(emphasisHtmlTransformer.transform('hello\\nworld')).toEqual('hello<br />world');
    });
    it('supports new line characters', () => {
      const emphasisHtmlTransformer = new EmphasisHtmlTransformer();
      expect(emphasisHtmlTransformer.transform('hello\nworld')).toEqual('hello<br />world');
    });
  });

  describe('returns null when no input provided', () => {
    it('input is null', () => {
      const emphasisHtmlTransformer = new EmphasisHtmlTransformer();
      expect(emphasisHtmlTransformer.transform(null)).toEqual(null);
    });

    it('input is undefined', () => {
      const emphasisHtmlTransformer = new EmphasisHtmlTransformer();
      expect(emphasisHtmlTransformer.transform(undefined)).toEqual(null);
    });
  });
});
