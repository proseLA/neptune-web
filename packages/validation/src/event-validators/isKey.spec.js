/* eslint-disable no-console */
import { keyMap } from '../common/keyMap';

import isKey from '.';

const { TAB, ESCAPE } = keyMap;

describe('isKey', () => {
  it('returns true if eventKey is equal to key', () => {
    const event = { key: 'Tab', keyCode: TAB.keyCode };
    expect(isKey({ keyType: TAB.key, event })).toBe(true);
  });

  it('returns true if eventKey is equal to empty key', () => {
    const event = { key: ' ' };
    expect(isKey({ keyType: 'Space', event })).toBe(true);
  });

  it('returns true if eventKey is equal to Spacebar', () => {
    const event = { key: 'Spacebar' };
    expect(isKey({ keyType: 'Space', event })).toBe(true);
  });

  it('returns true if eventKey is equal to Tab', () => {
    const event = { key: 'Tab' };
    expect(isKey({ keyType: TAB.key, event })).toBe(true);
  });

  it('returns true if eventKeyCode is equal to key', () => {
    const event = { keyCode: TAB.keyCode };
    expect(isKey({ keyType: TAB.key, event })).toBe(true);
  });

  it('returns false if key is  not defined', () => {
    const event = { keyCode: TAB.keyCode };
    expect(isKey({ event })).toBe(false);
  });

  it('returns false if event is  not defined', () => {
    const event = null;
    expect(isKey({ event })).toBe(false);
  });

  it('returns false if eventKey or eventKeyCode are not defined', () => {
    const event = {};
    expect(isKey({ keyType: TAB.key, event })).toBe(false);
  });

  it('returns false if eventKey is equal to key', () => {
    const event = { key: 'Escape', keyCode: ESCAPE.keyCode };
    expect(isKey({ keyType: TAB.key, event })).toBe(false);
  });

  it('returns false if eventKeyCode is equal to key', () => {
    const event = { keyCode: ESCAPE.keyCode };
    expect(isKey({ keyType: TAB.key, event })).toBe(false);
  });
});
