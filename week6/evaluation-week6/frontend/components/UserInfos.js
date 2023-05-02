import styles from '../styles/UserInfos.module.css';

function UserInfos() {

	// Write your code here

	return (
		<div>
			<h4 className={styles.title}>
				My username is in the redux store:
				<span className={styles.userInfos}>{/* Username from the store */}</span>
			</h4>
			<h4 className={styles.title}>
				My token is in the redux store:
				<span className={styles.userInfos}>{/* Token from the store */}</span>
			</h4>
		</div>
	);
}

export default UserInfos;
