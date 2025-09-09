import '../styles/globals.css';
import Head from 'next/head';
import Layout from './layout.js';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/SocialIcon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
