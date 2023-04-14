import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';

function Movie({ poster, title, overview, voteAverage, voteCount }) {
  const stars = [];

  function getStarColor(index, voteAverage) {
    const fullStars = Math.floor(voteAverage);
    if (index < fullStars) {
      return '#f1c40f';
    }
    return null;
  }

  for (let i = 0; i < 10; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={{ color: getStarColor(i, voteAverage) }}
      />
    );
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={poster} alt={`${title} Poster`} />
      <div className={styles.textContainer}>
        <span className={styles.name}>{title}</span>
        <p className={styles.description}>{overview}</p>
        <span className={styles.vote}>
          {stars} ({voteCount} votes)
        </span>
      </div>
    </div>
  );
}

export default Movie;