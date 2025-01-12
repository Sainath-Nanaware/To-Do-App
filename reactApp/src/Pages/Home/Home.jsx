import React from 'react'
import "./Home.css"
import UserInfo from '../../Components/UserInfo/UserInfo'
import { AiFillHome } from "react-icons/ai";
import { FaListCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
   import { FaSignOutAlt } from "react-icons/fa";
import TaskWindow from '../../Components/TaskWindow/TaskWindow';

function Home() {
  return (
        <>
            <div className="mainContainer">
                <div className="header">
                    <div className="userInfo">
                            <UserInfo/>
                    </div>
                    <div className="tabs">
                        <button> < AiFillHome /> All Tasks</button>
                        <button><FaListCheck />Important</button>
                        <button><FaCheck />Completed</button>
                        <button><LuNotepadText />Do it Now</button>
                    </div>
                    <div className="userLogout">
                        <button> <FaSignOutAlt />Sign Out</button>
                    </div>

                </div>
                <div className="taskWindow">
                    <TaskWindow/>
                </div>
            </div>
    
        </>
    )
}

export default Home
