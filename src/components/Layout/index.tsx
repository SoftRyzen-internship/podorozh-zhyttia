import { FC } from "react";
import Head from "next/head";

import { TypeLayoutProps } from "@/components/Layout/types";

const Layout: FC<TypeLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Подорож життя</title>
      </Head>
      {/* <Header/> */}
      <main>{children}</main>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
