import React from 'react'
import "./UserInfo.css"
function UserInfo() {

  console.log(localStorage.getItem('username'));
  
  return (
    <div className='userInfo'>
            <img src="./user-circle.png" alt="" />
            <p>{localStorage.getItem("username") || "Guest User"}</p>
            
    </div>
  )
}

export default UserInfo
