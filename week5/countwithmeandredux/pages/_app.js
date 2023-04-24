import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}


export default App;

