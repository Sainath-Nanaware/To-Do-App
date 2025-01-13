import React, { useState } from 'react'
import './registration.css'
import {useNavigate,Link} from 'react-router-dom'

const Registration = () => {
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
                const resp= await fetch("https://todo-backend-two-bice.vercel.app/register",data);
                if(resp.status===201){
                    const respData=await resp.json()
                    localStorage.setItem("token",respData.token)
                    localStorage.setItem("username",resp.userName) 
                    navigate('/')   
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
        <div className='regiContainer'>
            <form className='regiForm' onSubmit={(e)=>handleSubmit(e)}>
                <h1>Registration</h1>
                <input type="text" placeholder='Enter username' onChange={(e)=>setUserName(e.target.value)} value={username} />
                <input type="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} value={password} />
                <button type='submit'>Register</button>
                <Link to='/'id='linkTag'><p id='linkText'>Login</p></Link>
            </form>
        </div>
    
    </>
  )
}

export default Registration
