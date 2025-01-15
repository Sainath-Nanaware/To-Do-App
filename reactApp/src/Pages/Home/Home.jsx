import React, { useState,useEffect } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom';
import UserInfo from '../../Components/UserInfo/UserInfo'
import { AiFillHome } from "react-icons/ai";
import { FaListCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";
import { FaSignOutAlt } from "react-icons/fa";
import TaskWindow from '../../Components/TaskWindow/TaskWindow';

function Home() {
        const navigate=useNavigate()
        const [tab,setTab]=useState("All Tasks")

        //call api get todods 
        var resObj=[]
        const [todos, setTodos] = useState([]);
        // useEffect(() => {
        //     setTodos(resObj);    
        // }, []);

        async function getTask(){

        try {
          const res = await fetch(
            "https://todo-backend-two-bice.vercel.app/todos",
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                contentType: "application/json",
              },
            }
          );

          if (res.status === 200) {
                resObj = await res.json();
                // setTodos(resObj);
            } else if (res.status === 401) {
              alert("You are not login, Please login first");
               navigate("/");
            }}catch (error) {
             console.log(error);
            }
        }
        getTask()

  return (
        <>
            <div className="mainContainer">
                <div className="header">
                    <div className="userInfo">
                            <UserInfo/>
                    </div>
                    <div className="tabs">
                        <button onClick={
                            ()=>{setTab("All Tasks")
                                setTodos(resObj)
                            }}> 
                        < AiFillHome /> All Tasks</button>
                        <button onClick={
                            ()=>{setTab("Important")
                                setTodos([])
                            }}>
                        <FaListCheck />Important</button>
                        <button onClick={
                            ()=>{setTab("Completed")
                                const newArr = resObj.filter((element) => element.completed);
                                setTodos(newArr)
                            }}>
                        <FaCheck />Completed</button>
                        <button onClick={
                            ()=>{setTab("Do it Now")
                               const newArr = resObj.filter((element) => !element.completed);
                                setTodos(newArr)
                            }}>
                        <LuNotepadText />Do it Now</button>
                    </div>
                    <div className="userLogout">
                        <button onClick={()=>{navigate('/')}}> <FaSignOutAlt />Sign Out</button>
                    </div>

                </div>
                <div className="taskWindow">
                    <TaskWindow headingTitle={tab} todos={todos}/>
                </div>
            </div>
    
        </>
    )
}

export default Home
