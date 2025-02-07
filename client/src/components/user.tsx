interface UserInfo {
    id: number;
    username: string;
    email: string;
    password: string;
}
const User = ({ id, username, email, password }: UserInfo) => {
    return (
        <div className="User">
            <h1>Username: {username}</h1>
            <p>Email: {email} </p>
            <p>Password: {password}</p>
            <p>ID: {id}</p>
        </div>
    )
}

export default User;