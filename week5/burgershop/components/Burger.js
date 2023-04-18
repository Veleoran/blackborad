import styles from '../styles/Burger.module.css';

function Burger({ name, image, onSelect, onRemove }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <img className={styles.images} src={image} />
      <div className={styles.btnContainer}>
        <button className="selectBtn" onClick={() => onSelect(name)}>Select</button>
        <button className="removeBtn" onClick={() => onRemove(name)}>Remove all</button>
      </div>
    </div>
  );
}

export default Burger;
