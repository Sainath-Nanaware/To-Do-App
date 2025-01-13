import React, { useState } from 'react'
import './login.css'
import {Link,  useNavigate} from 'react-router-dom'
function Login() {
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    async function handleSubmit(e){
        e.preventDefault();//avoid refresh page on submit form

        const userData={username,password}

        const data={
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            },
        }
        try{
            if(password!="" && username!=""){
                const resp= await fetch("https://todo-backend-two-bice.vercel.app/login",data);
                if(resp.status===200){
                    const respData=await resp.json()
                    localStorage.setItem("token",respData.token)
                    localStorage.setItem("username",respData.userName) 
                    navigate('dashboard')   
                }else{
                    alert("something went's wrong!")
                }
            }else{
                alert("Please enter username and password!")
            }

            
        }catch{
            console.log(error);
            
        }

    }
  return (
    <>
        <div className='loginContainer'>
            <form className='loginForm' onSubmit={(e)=>handleSubmit(e)}>
                <h1>Login</h1>
                <input type="text" placeholder='Enter username' onChange={(e)=>setUserName(e.target.value)} value={username} />
                <input type="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} value={password} />
                <button type='submit'>Login</button>
                <Link to='/registration' id='linkTag'><p id='linkText'>Not memeber? sign up now</p></Link>
            </form>
        </div>
    
    </>
    
  )
}

export default Login


// navigate() in react route dom
//local storage 
//post request need header with content type  and token
//tostify
//back-drop filter