import { FC } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { TypeLayoutProps } from '@/Layout/types';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

const Layout: FC<TypeLayoutProps> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
