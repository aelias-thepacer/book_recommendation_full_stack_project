import '../../assets/css/LoginPage.css'

const LoginPage = () => {

  return (
    <section className='section'>
      <form className="login">
        <label className="username">Username</label>
        <input type="username" placeholder="Username" />
        <label className="password">Password</label>
        <input type="password" placeholder="Password" />
        <button className="loginbutton">Login</button>
      </form>
    </section>
  )
}

export default LoginPage;
