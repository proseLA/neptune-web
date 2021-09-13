import Link from '.';

export default {
  component: Link,
  title: 'Link',
};

export const Basic = () => {
  return (
    <>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry{' '}
        <Link aria-label="Click here for more details" href="#">
          content
        </Link>
        . Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry{' '}
        <Link href="https://wise.com" target="_blank">
          https://wise.com
        </Link>
        . Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
      </p>
    </>
  );
};
