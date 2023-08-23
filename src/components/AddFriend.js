import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function AddFriend() {

    const [friend, setFriend] = useState({
        name: "",
        email: "",
        age: ""
    })
    const { authInfo } = useContext(AuthContext);

    const handleChange = (e) => {
        setFriend({ ...friend, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {...friend, age:Number(friend.age)}
        const config = {
            method: "post",
            url: "http://localhost:9000/api/friends",
            headers: {
                Authorization: authInfo.token,
                "Content-type": "application/json"
            },
            data: payload
        }
        axios(config)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>ADD FRIEND</h1>
            <form onSubmit={handleSubmit}>
                <label>FRIEND NAME
                    <input type="text" name="name" onChange={handleChange} value={friend.name} />
                </label>
                <label>FRIEND EMAIL
                    <input type="email" name="email" onChange={handleChange} value={friend.email} />
                </label>
                <label>FRIEND AGE
                    <input type="number" name="age" onChange={handleChange} value={friend.age} />
                </label>
                <button type="submit" >SUBMIT</button>
            </form>
        </div>
    )
}
export default AddFriend;