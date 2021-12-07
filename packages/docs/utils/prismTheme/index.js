const colors = {
  punctuation: 'var(--color-content-secondary)',
  tag: 'var(--color-content-primary)',
  propName: 'var(--color-content-accent)',
  propValue: 'var(--color-content-positive)',
  propParenthesis: 'var(--color-content-primary)',
};
const theme = {
  plain: {
    color: 'var(--color-content-secondary)',
    fontSize: 'var(--font-size-14)',
  },
  styles: [
    {
      types: ['tag'],
      style: {
        color: colors.tag,
      },
    },

    {
      types: ['attr-name'],
      style: {
        color: colors.propName,
      },
    },

    {
      types: ['punctuation'],
      style: {
        color: colors.punctuation,
      },
    },

    {
      types: ['language-javascript'],
      style: {
        color: colors.propParenthesis,
      },
    },

    {
      types: ['script', 'boolean', 'string', 'number'],
      style: {
        color: colors.propValue,
      },
    },
  ],
};

module.exports = theme;
