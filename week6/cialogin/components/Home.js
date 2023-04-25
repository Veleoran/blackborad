import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  const [agentId, setAgentId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const agentIdRef = useRef();
  const passwordRef = useRef();

  const validateCredentials = (id, pass) => {
    const validId = 'codybanks';
    const validPassword = 'qwerty123';

    return id === validId && pass === validPassword;
  };

  const handleLogin = () => {
    setAgentId(agentIdRef.current.value);
    setPassword(passwordRef.current.value);

    if (validateCredentials(agentIdRef.current.value, passwordRef.current.value)) {
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    return (
      <div className={styles.container}>
        <h1>Welcome, agent Cody Banks.</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Image src="/logo.png" alt="Logo" width={200} height={200} />

      <h1>CIA LOGIN</h1>
      <div className={styles.inputContainer}>
        <span>AGENT ID</span>
        <input type="text" id="agentId" ref={agentIdRef} />
      </div>

      <div className={styles.inputContainer}>
        <span>PASSWORD</span>
        <input type="password" id="password" ref={passwordRef} />
      </div>

      <button id="login" onClick={handleLogin}>
        LOGIN
      </button>
    </div>
  );
}

export default Home;
