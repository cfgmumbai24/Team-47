import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate,Link } from 'react-router-dom';
import { setCredentials } from '../../Slices/authslice';
import styles from './Login.module.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/mitra/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(setCredentials(data));
          navigate('/dashboard');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.main}>
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Login</h1>
      <form onSubmit={onSubmit} className={styles.loginForm}>
        <label>
          Email:
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            placeholder="Enter your email"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
            placeholder="Enter your password"
          />
        </label>
        <button type="submit">Login</button>
        <Link to={'/signup'}>
        <p>Dont have a account? SignUp</p>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default Login;
