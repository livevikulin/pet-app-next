import '../styles/globals.css';
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <>
        <Head>
            <title>Пет проект</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
