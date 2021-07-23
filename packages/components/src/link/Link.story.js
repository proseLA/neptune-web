import React from 'react';

import Link from '.';

export default {
  component: Link,
  title: 'Link',
};

export const basic = () => {
  return (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s,&nbsp;
        <Link aria-label="Click here for more details" href="/test" target="_blank">
          content
        </Link>
        . &nbsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry standard dummy text ever since the 1500s
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s,&nbsp;
        <Link href="/test">content</Link>. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the
        1500s
      </p>
    </>
  );
};
