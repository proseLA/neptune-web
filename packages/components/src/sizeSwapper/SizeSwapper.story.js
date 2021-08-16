import SizeSwapper from './SizeSwapper';

export default {
  component: SizeSwapper,
  title: 'SizeSwapper',
};

export const Basic = () => {
  const breakpoints = [
    0,
    SizeSwapper.Breakpoint.EXTRA_SMALL,
    SizeSwapper.Breakpoint.SMALL,
    SizeSwapper.Breakpoint.MEDIUM,
    SizeSwapper.Breakpoint.LARGE,
    SizeSwapper.Breakpoint.EXTRA_LARGE,
  ];

  const items = breakpoints.map((bp, key) => {
    const isColumn = (key + 1) % 2 === 0;

    return {
      items: [...new Array(4)].map((value, key2) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`el-${key2}-${key}`} className="p-a-3 well m-x-2">
          Element shown from {bp}px {isColumn && `in ${SizeSwapper.Layout.COLUMN} mode`}
        </div>
      )),
      layout: isColumn ? SizeSwapper.Layout.COLUMN : null,
      breakpoint: bp,
    };
  });

  return <SizeSwapper items={items} />;
};
