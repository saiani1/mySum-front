import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/index.scss";

const MyApp = ({ Component }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>mySum</title>
      </Head>
      <Component />
    </>
  );
};

export default MyApp;
