import React, { useContext, useState }  from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [username,setUsername] = useState('')
    const [password ,setPassword]  = useState('')
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username,password);
    }

    return (
        <div>
            <h2>Login</h2>

            <input 
            type="text"  
            value={username}
            onClick={(e) => setUsername(e.target.value) } 
            placeholder="usrename" />


            <input className=" m-6 bg-slate-200 border-solid border-2 border-sky-400" type="text" 
            
             onClick={(e) => setPassword(e.target.value) }
            placeholder="password" />


            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Login 
