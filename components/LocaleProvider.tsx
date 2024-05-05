// components/LocaleProvider.tsx
'use client';

import { IntlProvider, useLocale } from 'next-intl';
import en from '../locales/en.json';
import pl from '../locales/pl.json';

const messages = {
    en: en,
    pl: pl,
};

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const locale = useLocale();

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
    >
      {children}
    </IntlProvider>
  );
};

export default LocaleProvider;