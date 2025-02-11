import '../../assets/css/LoginPage.css'
import { useState } from 'react';


const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <section className='section'>
      <form className="login">
        <h2>Welcome Back, Book Lover!</h2>
        <label className="username">Username</label>
        <input type="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label className="password">Password</label>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="loginbutton">Login</button>
        <p className="signup-prompt">Don't have an account? <a href="/signup">Sign up here</a></p>
      </form>
    </section>
  )
}

export default LoginPage;
