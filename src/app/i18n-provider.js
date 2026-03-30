'use client';
import { NextIntlProvider } from 'next-intl';

export default function I18nProvider({ children, messages }) {
  return <NextIntlProvider messages={messages}>{children}</NextIntlProvider>;
}