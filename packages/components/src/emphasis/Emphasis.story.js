import Emphasis from './Emphasis';

export default {
  component: Emphasis,
  title: 'Emphasis',
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

export const Basic = () => {
  return (
    <Emphasis
      text={
        'This is <important>important</important>.\\n' +
        'This is <positive>positive</positive>.\\n' +
        'This is <negative>negative</negative>.\\n' +
        'This is a <warning>warning</warning>.\\n' +
        '<script>alert("nice try!")</script>'
      }
    />
  );
};
