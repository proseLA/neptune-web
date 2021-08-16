import {
  Provider as ProviderComponent,
  Money,
  Select,
  getLangFromLocale,
  translations as supportedLanguages,
} from '@transferwise/components';
// @ts-expect-error messages
import messages from '@transferwise/components/build/es/no-polyfill/common/closeButton/CloseButton.messages';
import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

// @ts-expect-error liveEditorCode
import code from '../../../liveEditorCode/provider.code';
import { LiveEditorBlock, GeneratePropsTable, PolyfillsNote } from '../../../utils';
import { DocumentLink } from '../../../utils/pageUtils';
import { Meta } from '../../../utils/sections';

const defaultLocale = 'en-GB';
const localeOptions: { value: string; label: string }[] = [
  defaultLocale,
  'en-US',
  'ja-JP',
  'zh-HK',
  'es',
  'fr',
  'ru',
  'de',
  'tr',
].map((locale) => ({
  value: locale,
  label: locale,
}));

const PageContent = (): ReactElement => {
  return (
    <>
      Provides contextual data such as translations to components. See the{' '}
      <DocumentLink href="/about/Setup#translations-and-the-provider">
        Provider usage guide
      </DocumentLink>{' '}
      for more.
      <LiveEditorBlock
        code={code as string}
        scope={{
          getLangFromLocale,
          Provider: ProviderComponent,
          Select,
          Money,
          FormattedMessage,
          messages: messages as string,
          supportedLanguages,
          localeOptions,
          defaultLocale,
        }}
      />
      <PolyfillsNote />
      <GeneratePropsTable componentName="Provider" />
    </>
  );
};

export const meta: Meta = {
  name: 'Provider',
};

export default PageContent;
