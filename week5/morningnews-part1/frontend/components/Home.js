import Head from 'next/head';
import Article from './Article';
import TopArticle from './TopArticle';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

function Home() {

  
   

  const articles = articlesData.map((data, i) => {
    return <Article key={i} {...data} />;
  });

  return (
    <div>
      <Head>
        <title>Morning News - Home</title>
      </Head>

      <TopArticle {...topArticle} />

      <div className={styles.articlesContainer}>
        {articles}
      </div>
    </div>
  );
}

export default Home;
