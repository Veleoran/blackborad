import React from 'react';
import Movie from './Movie';
import { Popover, Button } from 'antd';
import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';

const Home = () => {
  const content = (
    <div>
      <p>Movie 1</p>
      <p>Movie 2</p>
      <p>Movie 3</p>
      <p>Movie 4</p>
    </div>
  );

  const movies = [];
  for (let i = 0; i < 10; i++) {
    movies.push(<Movie key={i} title={`Movie ${i + 1}`} image={`/placeholder.png`} />);
  }

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logocontainer}>
          <img src="/logo.png" alt="Logo" />
          <img className={styles.logo} src="/logoletter.png" alt="Letter logo" />
        </div>
        <div className={styles.buttoncontainer}> {/* Ajouté ici */}
        <Popover className={styles.Popover} content={content} title="Liked movies">
          <Button type="primary">♥ 4 movies</Button>
        </Popover>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h2 className={styles.subtitle}>Last releases</h2>
        <div className={styles.moviesContainer}>
          {movies}
        </div>
      </main>
    </div>
  );
};

export default Home;
