import { useState } from 'react';
import Movie from './Movie';
import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';
import { Popover, Button } from 'antd';

const moviesData = [
  { title: 'Forrest Gump', poster: 'forrestgump.jpg', voteAverage: 9.2, voteCount: 22_705, overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case.' },
  { title: 'The Dark Knight', poster: 'thedarkknight.jpg', voteAverage: 8.5, voteCount: 27_547, overview: 'Batman raises the stakes in his war on crime and sets out to dismantle the remaining criminal organizations that plague the streets.' },
  { title: 'Your name', poster: 'yourname.jpg', voteAverage: 8.5, voteCount: 8_691, overview: 'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places.' },
  { title: 'Iron Man', poster: 'ironman.jpg', voteAverage: 7.6, voteCount: 22_7726, overview: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.' },
  { title: 'Inception', poster: 'inception.jpg', voteAverage: 8.4, voteCount: 31_546, overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life.' },
];

function Home() {
 
  const [likedMovies, setLikedMovies] = useState([]);

  const movies = moviesData.map((data, i) => {
    return (
      <Movie
        key={i}
        title={data.title}
        overview={data.overview}
        poster={data.poster}
        voteAverage={data.voteAverage}
        voteCount={data.voteCount}
        onHeartClick={updateLikedMovies}
        isLiked={likedMovies.includes(data.title)}
      />
    );
  });

  function updateLikedMovies(movieTitle) {
    if (likedMovies.includes(movieTitle)) {
      setLikedMovies(likedMovies.filter(movie => movie !== movieTitle));
    } else {
      setLikedMovies([...likedMovies, movieTitle]);
    }
  }
  
  const popoverContent = (
    <div className={styles.popoverContent}>
      {likedMovies.map((movieTitle, index) => (
        <div key={index} className="liked-movie">
          {movieTitle}
          <button onClick={() => updateLikedMovies(movieTitle)}>x</button>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.main}>
      <Popover
        title="Liked movies"
        content={popoverContent}
        className={styles.popover}
        trigger="click"
      >
        <Button>
          ♥ {likedMovies.length} film{likedMovies.length !== 1 ? 's' : ''} liked
        </Button>
      </Popover>
      <div className={styles.moviesContainer}>{movies}</div>
    </div>
  );
}


export default Home;
