import React, { useState } from 'react'
import "./Home.css"
import UserInfo from '../../Components/UserInfo/UserInfo'
import { AiFillHome } from "react-icons/ai";
import { FaListCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
import { FaSignOutAlt } from "react-icons/fa";
import TaskWindow from '../../Components/TaskWindow/TaskWindow';

function Home() {

        const [tab,setTab]=useState("All Tasks")


  return (
        <>
            <div className="mainContainer">
                <div className="header">
                    <div className="userInfo">
                            <UserInfo/>
                    </div>
                    <div className="tabs">
                        <button onClick={()=>{setTab("All Tasks")}}> < AiFillHome /> All Tasks</button>
                        <button onClick={()=>{setTab("Important")}}><FaListCheck />Important</button>
                        <button onClick={()=>{setTab("Completed")}}><FaCheck />Completed</button>
                        <button onClick={()=>{setTab("Do it Now")}}><LuNotepadText />Do it Now</button>
                    </div>
                    <div className="userLogout">
                        <button> <FaSignOutAlt />Sign Out</button>
                    </div>

                </div>
                <div className="taskWindow">
                    <TaskWindow title={tab}/>
                </div>
            </div>
    
        </>
    )
}

export default Home
