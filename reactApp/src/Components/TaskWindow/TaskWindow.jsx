import React, { useEffect,useState } from 'react'
import "./TaskWindow.css"
import {  useNavigate} from 'react-router-dom'

import AddNewTask from '../AddNewTask/AddNewTask'
import TaskCard from '../TaskCard/TaskCard'

function TaskWindow({headingTitle,todos}) {
  
      console.log("todods:",todos)

  return (
    <>
        <div className='taskContainer'>
            {/* header of tasks */}
            <div className="taskHeader">
                <p>{headingTitle}</p>
                <button>+</button>
            </div>
            {/* All task cards container */}
            <div className="allTask">
                 {todos.length === 0 ? (
                    <AddNewTask/>
                     ) : (
                          [ todos.map((todo,index) => {
                          return <TaskCard key={index} title={todo.title} status={todo.completed}/>;
                        }),<AddNewTask/>]//create new array using [...todo,AddNewTask] example of spread oprator haha
                        
                 )}
                 
            </div>
        </div>
        
    </>
    
  )
}

export default TaskWindow
