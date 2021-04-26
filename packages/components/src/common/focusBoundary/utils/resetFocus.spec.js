import React from 'react';
import { cleanup, render, screen, userEvent } from '../../../test-utils';
import { resetFocus } from './resetFocus';
import { fakeKeyDownEvent } from '../../fakeEvents';

describe('resetFocus', () => {
  beforeEach(() => {
    render(
      <>
        <a href="test">first</a>
        <a href="test">middle</a>
        <a href="test">last</a>
      </>,
    );
  });
  afterEach(() => {
    cleanup();
  });
  it('set focus to first element when last element is focused and event is tab', () => {
    focusOnLast();

    resetFocus({
      focusableEls: { first: first(), last: last() },
      event: fakeKeyDownEvent({ shiftKey: false }),
    });
    expect(first()).toHaveFocus();
  });

  it('set focus to last element when first element is focused and event is shift + tab', () => {
    focusOnFirst();

    resetFocus({
      focusableEls: { first: first(), last: last() },
      event: fakeKeyDownEvent({ shiftKey: true }),
    });
    expect(last()).toHaveFocus();
  });

  it(`doesn't change focus when first element is focused and event is tab`, () => {
    focusOnFirst();

    resetFocus({
      focusableEls: { first: first(), last: last() },
      event: fakeKeyDownEvent(),
    });
    expect(first()).toHaveFocus();
  });

  it(`doesn't change focus when last element is focused and event is shift+tab`, () => {
    focusOnLast();

    resetFocus({
      focusableEls: { first: first(), last: last() },
      event: fakeKeyDownEvent({ shiftKey: true }),
    });
    expect(last()).toHaveFocus();
  });

  it(`doesn't change focus when middle element is focused and event is shift+tab or tab`, () => {
    focusOnMiddle();

    resetFocus({
      focusableEls: { first: first(), last: last() },
      event: fakeKeyDownEvent({ shiftKey: true }),
    });
    expect(middle()).toHaveFocus();

    resetFocus({
      focusableEls: { first: first(), last: last() },
      event: fakeKeyDownEvent(),
    });
    expect(middle()).toHaveFocus();
  });

  it(`doesn't change focus when first is the only element provided`, () => {
    focusOnFirst();
    resetFocus({
      focusableEls: { first: first(), last: undefined },
      event: fakeKeyDownEvent({ shiftKey: true }),
    });
    expect(first()).toHaveFocus();
  });

  it(`doesn't change focus when last is the only element provided`, () => {
    focusOnLast();
    resetFocus({
      focusableEls: { first: undefined, last: last() },
      event: fakeKeyDownEvent(),
    });
    expect(last()).toHaveFocus();
  });

  const first = () => screen.getByText('first');
  const last = () => screen.getByText('last');
  const middle = () => screen.getByText('middle');

  const focusOnFirst = () => userEvent.tab();
  const focusOnLast = () => userEvent.tab({ shift: true });
  const focusOnMiddle = () => {
    userEvent.tab();
    userEvent.tab();
  };
});
