import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faVideo, faHeart, } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';
import { useState } from 'react';

function Movie(props) {
  const stars = [];
  for (let i = 0; i < 10; i++) {
    let style = {};
    if (i < props.voteAverage - 1) {
      style = { 'color': '#f1c40f' };
    }
    stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} />);
  }

  const [personalNote, setPersonalNote] = useState(0);
  const [watchCount, setWatchCount] = useState(0);
  const [like, setLike] = useState(false);

  const rateMovie = (rating) => {
    setPersonalNote(Number(rating));
  };
  
  const incrementWatchCount = () => {
    setWatchCount(watchCount + 1);
  };

  const toggleLike = () => {
    setLike(!like);
  };

  const renderPersonalRatingStars = () => {
    const stars = [];
    for (let i = 1; i <= 10; i++) {
      const color = i <= personalNote ? '#2196f3' : '';
      stars.push(
        <FontAwesomeIcon
          key={i}
          className="note"
          icon={faStar}
          style={{ color, cursor: 'pointer' }}
          onClick={() => rateMovie(i)}
        />
      );
    }
    return stars;
  };

  const renderWatchIcon = () => {
    return (
      <FontAwesomeIcon
        className="watch"
        icon={faVideo}
        style={{ color: watchCount > 0 ? '#e74c3c' : '', cursor: 'pointer' }}
        onClick={incrementWatchCount}
      />
    );
  };

  const renderLikeIcon = () => {
    const color = like ? '#e74c3c' : '';
    return (
      <FontAwesomeIcon
        className="like"
        icon={faHeart}
        style={{ color, cursor: 'pointer' }}
        onClick={toggleLike}
      />
    );
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.poster} alt={props.title} />
      <div className={styles.textContainer}>
        <span className={styles.name}>{props.title}</span>
        <p className={styles.description}>{props.overview}</p>
        <span className={styles.vote}>{stars} ({props.voteCount})</span>
        <div className={styles.interactions}>
          <div>{renderPersonalRatingStars()} ({personalNote})</div>
          <div>{renderWatchIcon()} ({watchCount})</div>
          <div>{renderLikeIcon()}</div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
