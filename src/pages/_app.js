import '../styles/globals.css';
import Head from 'next/head';
import Layout from './layout.js';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/SocialIcon.png" />
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>

      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
