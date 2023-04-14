import styles from '../styles/Gift.module.css'

const Gift = ({name, imageUrl, price}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.name}>{name}</h2>
        <span className={styles.price}>{price}€</span>
      </div>
        <img className={styles.image} src={imageUrl} alt={name} />
    </div>
  )
}

export default Gift