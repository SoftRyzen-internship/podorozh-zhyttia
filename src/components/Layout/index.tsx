import { FC } from 'react';
import Head from 'next/head';

import { TypeLayoutProps } from '@/components/Layout/types';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';

const Layout: FC<TypeLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Подорож життя</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
