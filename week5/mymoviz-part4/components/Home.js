import { useState } from 'react';
import Movie from './Movie';
import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';
import { Popover, Button } from 'antd';

function Home() {
  const moviesData = [
    // ...
  ];

  const [likedMovies, setLikedMovies] = useState([]);

  const updateLikedMovies = (movieTitle, action) => {
    if (action === 'add') {
      setLikedMovies([...likedMovies, movieTitle]);
    } else if (action === 'remove') {
      setLikedMovies(likedMovies.filter((title) => title !== movieTitle));
    }
  };

  const movies = moviesData.map((data, i) => {
    return <Movie key={i} title={data.title} overview={data.overview} poster={data.poster} voteAverage={data.voteAverage} voteCount={data.voteCount} onLike={updateLikedMovies} />;
  });

  const popoverContent = (
    <div className={styles.popoverContent}>
      {likedMovies.map((movie, index) => (
        <span key={index}>
          {movie} <button onClick={() => updateLikedMovies(movie, 'remove')}>x</button>
        </span>
      ))}
    </div>
  );

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logocontainer}>
          <img src="logo.png" alt="Logo" />
          <img className={styles.logo} src="logoletter.png" alt="Letter logo" />
        </div>
        <Popover title="Liked movies" content={popoverContent} className={styles.popover} trigger="click">
          <Button>♥ {likedMovies.length} movie(s)</Button>
        </Popover>
      </div>
      <div className={styles.title}>LAST RELEASES</div>
      <div className={styles.moviesContainer}>
        {movies}
      </div>
    </div>
  );
}

export default Home;
