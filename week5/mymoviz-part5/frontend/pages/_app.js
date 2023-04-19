import '../styles/globals.css';
import Head from 'next/head';
import { Movies } from '../components/Movie';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Movies />
      <Component {...pageProps} />
    </>
  );
}

export default App;
