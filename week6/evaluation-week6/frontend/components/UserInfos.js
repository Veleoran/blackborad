import styles from '../styles/UserInfos.module.css';
import { useSelector } from "react-redux";

function UserInfos() {

    // Use useSelector to retrieve state from the redux store
    const username = useSelector((state) => state.user.value.username);
    const token = useSelector((state) => state.user.value.token);

	return (
		<div>
			<h4 className={styles.title}>
				My username is in the redux store:
				<span className={styles.userInfos}>{username}</span>
			</h4>
			<h4 className={styles.title}>
				My token is in the redux store:
				<span className={styles.userInfos}>{token}</span>
			</h4>
		</div>
	);
}

export default UserInfos;
