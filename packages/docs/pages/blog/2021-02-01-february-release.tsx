import { ReactElement } from 'react';

import { DocumentLink } from '../../utils/pageUtils';
import { Meta } from '../../utils/sections';

export const meta: Meta = {
  name: 'February Release',
  date: '2021-02-01',
  authors: [
    {
      name: 'Anton Dozortsev',
      githubUsername: 'dozortsev',
    },
  ],
  version: {
    components: '34.0.0',
    css: '8.0.0',
  },
  tags: [],
};

const PageContent = (): ReactElement => {
  return (
    <div className="d-flex flex-column m-t-4">
      <DocumentLink href="/about/Setup#usage">Updated setup guide</DocumentLink>
      <DocumentLink href="/components/context/Provider">Provider docs</DocumentLink>
      <p className="m-t-2">
        We had previously introduced the Provider, but in this release we updated slightly how it
        works to reflect the differences between locale and languages.
        <pre>
          {`<Provider i18n= {
    locale // locale codes e.g es-ES, en-GB, en-US, en, zh-HK etc
    messages: lang.json // where lang is a language codes: en, de, jp, zh
} >...`}
        </pre>
      </p>
      <p>
        We also refactored some components to use the locale value from the global context (the new
        source of truth) rather than from props:
        <ul className="m-t-1">
          <li>Money</li>
          <li>MoneyInput</li>
          <li>PhoneNumberInput</li>
          <li>FormattedValue</li>
          <li>DynamicFieldDefinitionList</li>
          <li>DynamicFieldDefinitionList</li>
          <li>
            DateLookup + sub components (YearCalendarTable, YearCalendar, OpenButton,
            MonthCalendarTable
          </li>
          <li>DateInput</li>
          <li>Upload</li>
        </ul>
      </p>
    </div>
  );
};

export default PageContent;
