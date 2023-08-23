import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const [user, setUser] = useState({
        username:'workintech',
        password:'wecandoit'
    })
    const {login} = useContext(AuthContext);
    const handleChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        login(user);
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>USERNAME
                    <input type="text" name="username" onClick={handleChange} value={user.username}/>
                </label>
                <label>PASSWORD
                    <input type="password" name="password" onClick={handleChange} value={user.password}/>
                </label>
                <button type="submit" >SUBMIT</button>
            </form>
        </div>
    )
}
export default Login;