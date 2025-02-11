import '../../assets/css/LoginPage.css'
import { useState, type SyntheticEvent, type ChangeEvent } from 'react';
import Auth from '../../utils/auth.ts';
import { login } from '../../api/authAPI';
import type { UserLogin } from '../../interfaces/UserLogin.ts';

const LoginPage = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <section className='section'>
      <form className="login" onSubmit={handleSubmit}>
        <h2>Welcome Back, Book Lover!</h2>
        <label className="username">Username</label>
        <input type="text" name="username" placeholder="Enter your username" value={loginData.username || ""} onChange={handleChange} />
        <label className="password">Password</label>
        <input type="password" name="password" placeholder="Enter your password" value={loginData.password || ''} onChange={handleChange} />
        <button className="loginbutton" type="submit">Login</button>
        <p className="signup-prompt">Don't have an account? <a href="/signup">Sign up here</a></p>
      </form>
    </section>
  )
}

export default LoginPage;
