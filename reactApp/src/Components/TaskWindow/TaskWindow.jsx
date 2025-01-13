import React from 'react'
import "./TaskWindow.css"
import AddNewTask from '../AddNewTask/AddNewTask'
import TaskCard from '../TaskCard/TaskCard'

function TaskWindow({title}) {
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
                <TaskCard/>
                <AddNewTask/>
            </div>
        </div>
        
    </>
    
  )
}

export default TaskWindow
