import Movie from './Movie';
import styles from '../styles/Home.module.css';

const NB_MOVIES = 10;

function Home() {
  const movieList = [];
  for (let i = 0; i < NB_MOVIES; i++) {
    movieList.push(<Movie key={i} />);
  }

  return (
    <div>
      <img src="logo.png" alt="Logo" />
      <button>4 movies</button>
      {movieList}
    </div>
  );
}

export default Home;
