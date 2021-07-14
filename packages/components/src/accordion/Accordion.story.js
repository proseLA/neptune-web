import React from 'react';
import { select } from '@storybook/addon-knobs';
import { FastFlag as FastFlagIcon, Check } from '@transferwise/icons';
import Accordion from './Accordion';
import Modal from '../modal';

import { Size, Scroll, Theme } from '../common';

export default {
  component: Accordion,
  title: 'Accordion',
};

export const basic = () => {
  const items = [
    {
      title: 'Item 1',
      content:
        'Lauri Ipsum is simply dummy text of the printing and typesetting industry. Lauri Ipsum has been the industry ever since the 1500s, when',
      id: 'Item 1',
    },
    {
      title: 'Item 2',
      content: 'I can be text',
      id: 'Item 2',
    },
    {
      title: 'Item 3',
      content:
        'I can be text long text I can be text long text I can be text long text I can be text long text',
      id: 'Item 3',
    },
  ];

  const indexOpen = select('indexOpen', [0, 1, 2], 0);

  const theme = select('Theme', [Theme.LIGHT, Theme.DARK], Theme.LIGHT);

  return (
    <div className={theme === 'dark' ? 'bg--dark p-a-3' : 'p-a-3'}>
      <Accordion items={items} indexOpen={indexOpen} theme={theme} />
    </div>
  );
};

export const withIcons = () => {
  const items = [
    {
      title: 'Item 1',
      content: `Lauri Ipsum is simply dummy text of the printing and typesetting industry. Lauri Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lauri Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lauri Ipsum`,
      id: 'Item 1',
      icon: <FastFlagIcon size={24} />,
    },
    {
      title: 'Item 2',
      content: `Lauri Ipsum is simply dummy text of the printing and typesetting industry. Lauri Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lauri Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lauri Ipsum`,
      id: 'Item 2',
      icon: <FastFlagIcon size={24} />,
    },
    {
      title: 'Item 3 can be with an icon',
      content: `Lauri Ipsum is simply dummy text of the printing and typesetting industry. Lauri Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lauri Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lauri Ipsum`,
      id: 'Item 3',
      icon: <FastFlagIcon size={24} />,
    },
  ];

  const indexOpen = select('indexOpen', [0, 1, 2], 0);

  return <Accordion items={items} indexOpen={indexOpen} />;
};

export const inModal = () => {
  const items = [
    {
      title: 'If you have a deadline, set up your transfer early',
      content:
        'Most large transfers take around 2–4 working days from start to finish. So set up your transfer early if you have a deadline coming up.',
      id: 'Item 1',
      icon: <Check size={24} />,
    },
    {
      title: 'Have documents on hand to speed things up',
      content:
        'When you set up your transfer, we might ask for documents that show where your money comes from. Documents you might need (opens in a new tab)',
      id: 'Item 2',
      icon: <FastFlagIcon size={24} />,
    },
    {
      title: 'Item 3',
      content:
        'I can be text I can be tex I can be tex I can be ex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex  n be tex I can be tex I can be t n be tex ex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex  n be tex I can be tex I can be t n be tex ex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex  n be tex I can be tex I can be t n be textex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex I can be text I can be tex I can be tex I can be tex I can be tex  n be tex I can be tex I can be t n be tex I can be tex I can be t n be tex I can be tex I can be tend ',
      id: 'Item 3',
    },
  ];

  const indexOpen = select('indexOpen', [0, 1, 2], 0);

  return (
    <Modal
      body={
        <div className="p-a-1">
          <h3 className="m-t-2 m-b-4 text-xs-center">large transfer tips</h3>
          <Accordion items={items} indexOpen={indexOpen} />
        </div>
      }
      closeOnClick
      scroll={Scroll.CONTENT}
      size={Size.LARGE}
      open
      footer={
        <div className="p-a-3 text-xs-center">
          <a href="/large-amounts">learn more</a>
        </div>
      }
    />
  );
};
