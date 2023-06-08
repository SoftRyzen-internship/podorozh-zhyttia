import { FC, useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { TypeLayoutProps } from '@/Layout/types';

import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

const Layout: FC<TypeLayoutProps> = ({ children }) => {
  const [activePath, setActivePath] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleActivePath = (path: string) => {
    setActivePath(path);
  };

  const handleLogoClick = () => {
    setActivePath(null);
  };

  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta name="description" content={`${t('support.description')}`} />
        <meta property="og:title" content={`${t('head.title')}`} />
        <meta
          property="og:description"
          content={`${t('support.description')}`}
        />
        <meta property="og:image" content="/images/logo.png" />
      </Head>
      <Header
        activePath={activePath}
        handleActivePath={handleActivePath}
        handleLogoClick={handleLogoClick}
      />
      <main>{children}</main>
      <Footer handleLogoClick={handleLogoClick} />
    </>
  );
};

export default Layout;
