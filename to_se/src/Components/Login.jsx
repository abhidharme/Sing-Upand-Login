import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
 import { Navigate } from "react-router-dom";
import { loginInto } from "../Redux/Login/action";

export const Login = () =>{

const dispatch = useDispatch();
const [password, setPassword] = useState("");
const [username , setUsername] = useState("");

const {isAuthenticated} = useSelector((store)=>store.login);

if(isAuthenticated){
    return <Navigate to="/product" />
}

const handleSubmit = ()=>{
   const payload ={
      username,
      password
   }
   
   dispatch(loginInto(payload))
}


console.log(username)
return(
    <div>

        <input type="text" 
        placeholder="Enter Uswename"
        value={username}
        onChange={(e)=>setUsername(e.target.value)} />
        <br></br>
        <input type="text"
        placeholder="Enter Password"
        value={password} 
        onChange={(e)=>setPassword(e.target.value)} />
        <br>
        </br>
        <button onClick={handleSubmit}>Login</button>
    </div>
)



}