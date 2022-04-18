import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { SignInto } from "../Redux/Sing_up/action";
import { Navigate } from "react-router-dom";


export const SignUp = () =>{

const dispatch = useDispatch();
const [password, setPassword] = useState("");
const [username , setUsername] = useState("");
const [email , setEmail] = useState("");
const [description , setDesc] = useState("");
const [mobile , setMobile] = useState("");
const [name , setName] = useState("");

 const {isAuthention} = useSelector((store)=>store.sign);

if(isAuthention){
    return <Navigate to="/login" />
}

const handleSubmit = ()=>{
   const payload ={
    name,
    email,
 password,
 username,
   mobile,
description
   }
   
   dispatch(SignInto(payload))
}


console.log(username)
return(
    <div>
        <input type="text" 
        placeholder="Enter Name"
        value={name}
        onChange={(e)=>setName(e.target.value)} />
        <br></br>
        <input type="text" 
        placeholder="Enter email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />
        <br></br>
        <input type="text" 
        placeholder="Enter Description"
        value={description}
        onChange={(e)=>setDesc(e.target.value)} />
        <br></br>
        <input type="text" 
        placeholder="Enter Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)} />
        <br></br>
        <input type="text"
        placeholder="Enter Password"
        value={password} 
        onChange={(e)=>setPassword(e.target.value)} />
        <br>
        </br>
        <input type="text" 
        placeholder="Enter Mobile"
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)} />
        <br></br>
        <button onClick={handleSubmit}>Login</button>
    </div>
)



}