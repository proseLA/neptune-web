import { BottomSheet, Button, NavigationOption, Size } from '@transferwise/components';
import { Card, PinCode, FastFlag, Menu } from '@transferwise/icons';
import { ReactElement, useState } from 'react';

// @ts-expect-error liveEditorCode
import code from '../../../liveEditorCode/bottomSheet.code';
import { LiveEditorBlock, GeneratePropsTable } from '../../../utils';
import { Meta } from '../../../utils/sections';

const PageContent = (): ReactElement => {
  const [openVarientOne, setOpenVarientOne] = useState(false);
  const [openVarientTwo, setOpenVarientTwo] = useState(false);
  return (
    <div>
      <p>
        A bottom sheet is a container you can use to display supporting content or a short,
        supplementary task on <b>mobile experiences</b>. See{' '}
        {/* TODO replace with Link component from `@transferwise/components` */}
        <a
          href="https://transferwise.github.io/neptune/components/bottom-sheet/"
          target="_blank"
          rel="noreferrer"
        >
          usage guidelines
        </a>{' '}
        for more info.
      </p>
      <h2 className="docs-heading">Variants</h2>
      <ul>
        <li>
          Hugs Content{' '}
          <Button
            size={Size.SMALL}
            onClick={() => {
              setOpenVarientOne(true);
            }}
          >
            Demo
          </Button>
        </li>
        <BottomSheet open={openVarientOne} onClose={() => setOpenVarientOne(false)}>
          <h2 className="p-x-2">Settings</h2>
          <NavigationOption
            title="Show me insights for"
            content="All activity"
            showMediaAtAllSizes
            media={<FastFlag size={24} />}
            className="p-l-2"
          />
          <NavigationOption
            showMediaAtAllSizes
            title="Show PIN"
            media={<PinCode size={24} />}
            className="p-l-2"
          />
        </BottomSheet>
        <li>
          Content overflow{' '}
          <Button
            size={Size.SMALL}
            onClick={() => {
              setOpenVarientTwo(true);
            }}
          >
            Demo
          </Button>
        </li>
        <BottomSheet open={openVarientTwo} onClose={() => setOpenVarientTwo(false)}>
          <h2 className="p-x-2">Money without borders</h2>
          <div className="p-x-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic modi sed possimus, minima
            dolorem qui suscipit omnis commodi accusamus soluta exercitationem iste reprehenderit
            assumenda repudiandae minus ducimus perspiciatis, pariatur consectetur incidunt repellat
            accusantium? Ipsum itaque placeat corporis ipsa, esse sed. Magnam ratione eum ullam
            consequatur, nulla tenetur repellendus quo eaque molestiae ducimus soluta sunt dolor
            dicta autem qui vitae alias. Facilis laboriosam ex obcaecati, assumenda alias rem
            voluptatum minus delectus vero, distinctio tempora est mollitia iste deleniti autem
            dignissimos doloremque ratione! Dicta voluptas doloremque, harum deserunt corrupti aut
            tempore nobis cum obcaecati adipisci eveniet esse, quis totam alias excepturi hic. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Hic modi sed possimus, minima dolorem
            qui suscipit omnis commodi accusamus soluta exercitationem iste reprehenderit assumenda
            repudiandae minus ducimus perspiciatis, pariatur consectetur incidunt repellat
            accusantium? Ipsum itaque placeat corporis ipsa, esse sed. Magnam ratione eum ullam
            consequatur, nulla tenetur repellendus quo eaque molestiae ducimus soluta sunt dolor
            dicta autem qui vitae alias. Facilis laboriosam ex obcaecati, assumenda alias rem
            voluptatum minus delectus vero, distinctio tempora est mollitia iste deleniti autem
            dignissimos doloremque ratione! Dicta voluptas doloremque, harum deserunt corrupti aut
            tempore nobis cum obcaecati adipisci eveniet esse, quis totam alias excepturi hic. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Hic modi sed possimus, minima dolorem
            qui suscipit omnis commodi accusamus soluta exercitationem iste reprehenderit assumenda
            repudiandae minus ducimus perspiciatis, pariatur consectetur incidunt repellat
            accusantium? Ipsum itaque placeat corporis ipsa, esse sed. Magnam ratione eum ullam
            consequatur, nulla tenetur repellendus quo eaque molestiae ducimus soluta sunt dolor
            dicta autem qui vitae alias. Facilis laboriosam ex obcaecati, assumenda alias rem
            voluptatum minus delectus vero, distinctio tempora est mollitia iste deleniti autem
            dignissimos doloremque ratione! Dicta voluptas doloremque, harum deserunt corrupti aut
            tempore nobis cum obcaecati adipisci eveniet esse, quis totam alias excepturi hic.
          </div>
        </BottomSheet>
      </ul>
      <LiveEditorBlock
        code={code as string}
        scope={{ BottomSheet, Button, NavigationOption, Size, PinCode, Card, Menu }}
      />
      <GeneratePropsTable componentName="BottomSheet" />
      <br />
      <br />
    </div>
  );
};

export const meta: Meta = {
  name: 'BottomSheet',
  badge: {
    expiryDate: '2021-09-30',
    type: 'new',
  },
};

export default PageContent;
