

const LoginPage = () => {
  return (
    <div className="login">
    <label className="username">Username</label>
        <input type="username" placeholder="Username"/>
     <label className="password">Password</label>
        <input type="password"placeholder="Password"/>
        <button className="loginbutton">Login</button>
    </div>
  )
}

export default LoginPage;
