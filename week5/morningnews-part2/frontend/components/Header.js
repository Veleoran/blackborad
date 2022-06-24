import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import { Modal } from 'antd';
import Link from 'next/link';

function Header() {
	const [date, setDate] = useState('2050-11-22T23:59:59');
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		setDate(new Date());
	}, []);

	const showModal = () => {
		setIsModalVisible(!isModalVisible);
	};

	const modalContent = (
		<div className={styles.registerContainer}>
			<div className={styles.registerSection}>
				<p>Sign-up</p>
				<input type="text" placeholder="Username" />
				<input type="password" placeholder="Password" />
				<button>Register</button>
			</div>
			<div className={styles.registerSection}>
				<p>Sign-in</p>
				<input type="text" placeholder="Username" />
				<input type="password" placeholder="Password" />
				<button id="connection">Connect</button>
			</div>
		</div>
	);

	let userIcon;
	if (isModalVisible) {
		userIcon = <FontAwesomeIcon icon={faXmark} onClick={() => showModal()} className={styles.userIcon} />;
	} else {
		userIcon = <FontAwesomeIcon icon={faUser} onClick={() => showModal()} className={styles.userIcon} />;
	}

	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<Moment className={styles.date} date={date} format="MMM Do YYYY" />
				<h1 className={styles.title}>Morning News</h1>
				{userIcon}
			</div>

			<div className={styles.linkContainer}>
				<Link href="/"><span className={styles.link}>Articles</span></Link>
				<Link href="/bookmarks"><span className={styles.link}>Bookmarks</span></Link>
			</div>

			{isModalVisible && <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} visible={isModalVisible} closable={false} footer={null}>
					{modalContent}
				</Modal>
			</div>}
		</header >
	);
}

export default Header;
