import styles from '../styles/Burger.module.css';

function Burger(props) {
	return (
		<div className={styles.container}>
			<h2 className={styles.name}>{props.name}</h2>
			<img className={styles.images} src={props.image} />
			<div className={styles.btnContainer}>

			</div>
		</div>
	);
}

function Burger({ onSelect, onRemove }) {
	const burgerName = "The Californian";
  
	return (
	  <div>
		<button className="selectBtn" onClick={() => onSelect(burgerName)}>Select</button>
		<button className="removeBtn" onClick={() => onRemove(burgerName)}>Remove all</button>
	  </div>
	);
  }
  
export default Burger;
