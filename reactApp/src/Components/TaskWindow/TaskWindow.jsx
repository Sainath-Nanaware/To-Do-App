import React, { useEffect,useState } from 'react'
import "./TaskWindow.css"
import {  useNavigate} from 'react-router-dom'

import AddNewTask from '../AddNewTask/AddNewTask'
import TaskCard from '../TaskCard/TaskCard'

function TaskWindow({title}) {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTask();
  }, []);
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
        const resObj = await res.json();
        setTodos(resObj);
        // switch(title){
        //   case "All Tasks":{
        //     setTodos(resObj);
        //     break
        //   }
        //   case "Importanat":{
        //     setTodos([])
        //     break
        //   }
        //   case"Completed":{
        //     setTodos([])
        //     break
        //   }
        //   case "Do it Now":{
        //       const filterTask=resObj.filter((element)=>element.completed===false)
        //       console.log("do it now tasks",filterTask);
        //       setTodos(filterTask)
        //       break  
        //   }
        // }
      } else if (res.status === 401) {
        alert("You are not login, Please login first");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
        <div className='taskContainer'>
            {/* header of tasks */}
            <div className="taskHeader">
                <p>{title}</p>
                <button>+</button>
            </div>
            {/* All task cards container */}
            <div className="allTask">
                 {todos.length === 0 ? (
                    <AddNewTask/>
                     ) : (
                           todos.map((todo,index) => {
                          return <TaskCard key={index} title={todo.title} status={todo.completed}/>;
                        })
                 )}
                 <AddNewTask/>
            </div>
        </div>
        
    </>
    
  )
}

export default TaskWindow
