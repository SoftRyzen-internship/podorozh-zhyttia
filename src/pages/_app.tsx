import { FC } from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import Layout from '@/Layout';

import '@/styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
