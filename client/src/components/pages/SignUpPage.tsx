import '../../assets/css/SignUpPage.css'
import { useState } from 'react';

export const SignUpPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <section className='section'>
            <form className="signup">
                <h2>Join the Book Club!</h2>
                <label className="username">Username</label>
                <input type="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label className="password">Password</label>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="signupbutton">Sign Up</button>
            </form>
        </section>
    )
}