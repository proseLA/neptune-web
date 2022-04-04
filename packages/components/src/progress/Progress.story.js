import Progress from './Progress';

export default {
  component: Progress,
  title: 'Progress',
};

export const Basic = () => <Progress id="progress-bar-id" progress={{ value: 50, max: 100 }} />;
