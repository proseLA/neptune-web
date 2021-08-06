import { useState } from 'react';
import { FastFlag } from '@transferwise/icons';

import BottomSheet from './BottomSheet';
import Button from '../../button';
import NavigationOption from '../../navigationOption';

export default {
  component: BottomSheet,
  title: 'BottomSheet',
};

export const opened = () => {
  const [toggler, setToggler] = useState(true);

  return (
    <div style={{ height: '2000px' }}>
      <Button onClick={() => setToggler(true)}>Open</Button>
      <BottomSheet
        open={toggler}
        onClose={() => {
          setToggler(false);
        }}
      >
        <h2>Money without borders</h2>I want to make my div tag with id drag_me to be draggable up
        to the length of 300px from left and 460px from top, only using CSS. I also want to make it
        resizable. Again same condition as above i.e. no Javascript or jquery. Can any one suggest
        the solution for this...
        <br />
        <br />
        <NavigationOption
          title="Navigation option"
          content="Button and icon are vertically centered."
          media={<FastFlag size={24} />}
        />
      </BottomSheet>
    </div>
  );
};

export const openedWithOverflowContent = () => {
  const [toggler, setToggler] = useState(true);
  return (
    <div style={{ height: '2000px' }}>
      <Button onClick={() => setToggler(true)}>Open</Button>
      <BottomSheet
        open={toggler}
        onClose={() => {
          setToggler(false);
        }}
      >
        <h2>Content without padding</h2>I want to make my div tag with id drag_me to be draggable up
        to the length of 300px from left and 460px from top, only using CSS. I also want to make it
        resizable. Again same condition as above i.e. no Javascript or jquery. Can any one suggest
        the solution for this... Thanks in advance to all I want to make my div tag with id drag_me
        to be
        <NavigationOption
          title="Navigation option"
          content="Button and icon are vertically centered."
          media={<FastFlag size={24} />}
        />
        <NavigationOption
          title="Navigation option"
          content="Button and icon are vertically centered."
          media={<FastFlag size={24} />}
        />
        I want to make my div tag with id drag_me to be draggable up to the length of 300px from
        left and 460px from top, only using CSS. I also want to make it resizable. Again same
        condition as above i.e. no Javascript or jquery. Can any one suggest the solution for
        this... I want to make my div tag with id drag_me to be draggable up to the length of 300px
        from left and 460px from top, only using CSS. I also want to make it resizable. Again same
        condition as above i.e. no Javascript or jquery. Can any one suggest the solution for
        this... I want to make my div tag with id drag_me to be draggable up to the length of 300px
        from left and 460px from top, only using CSS. I also want to make it resizable. Again same
        condition as above i.e. no Javascript or jquery. Can any one suggest the solution for
        this... I want to make my div tag with id drag_me to be draggable up to the length of 300px
        from left and 460px from top, only using CSS. I also want to make it resizable. Again same
        condition as above i.e. no Javascript or jquery. Can any one suggest the solution for
        this... I want to make my div tag with id drag_me to be draggable up to the length of 300px
        from left and 460px from top, only using CSS. I also want to make it resizable. Again same
        condition as above i.e. no Javascript or jquery. Can any one suggest the solution for
        this...I want to make my div tag with id drag_me to be draggable up to the length of 300px
        from left and 460px from top, only using CSS. I also want to make it resizable. Again same
        condition as above i.e. no Javascript or jquery. Can any one suggest the solution for
        this... I want to make my div tag with id drag_me to be draggable up to the length of 300px
        from left and 460px from top, only using CSS. I also want to make it resizable. Again same
        condition as above i.e. no Javascript or jquery. Can any one suggest the solution for
        this... I want to make my div tag with id drag_me to be draggable up to the length of 300px
        from left and 460px from top, only using CSS. I also want to make it resizable. Again same
        condition as above i.e. no Javascript or jquery. Can any one suggest the solution for
        this... I want to make my div tag with id drag_me to be draggable up to the length of 300px
        from left and 460px from top, only using CSS. I also want to make it resizable. Again same
        condition as above i.e. no Javascript or jquery. Can any one suggest the solution for
        this... I want to make my div tag with id drag_me to be draggable up to the length of 300px
        from left and 460px from top, only using CSS. I also want to make it resizable. Again same
        condition as above i.e. no Javascript or jquery. Can any one suggest the solution for
        this...{' '}
        <b>
          I want to make my div tag with id drag_me to be draggable up to the length of 300px from
          left and 460px from top, only using CSS. I also want to make it resizable. Again same
          condition as above i.e. no Javascript or jquery. Can any one suggest the solution for
          this...
        </b>
      </BottomSheet>
    </div>
  );
};
