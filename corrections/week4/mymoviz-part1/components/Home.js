import Movie from './Movie';
import styles from '../styles/Home.module.css';

function Home() {
  const NB_MOVIES = 10;

  const movies = [];
  for (let i = 0; i < NB_MOVIES; i++) {
    movies.push(<Movie key={i} />);
  }

  return (
    <div>
      <img src="logo.png" alt="Logo" />
      <button>4 movies</button>
      {movies}
    </div>
  );
}

export default Home;
