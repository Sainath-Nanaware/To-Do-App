import React from 'react'
import "./TaskWindow.css"
import AddNewTask from '../AddNewTask/AddNewTask'

function TaskWindow() {
  return (
    <>
        <div className='taskContainer'>
            {/* header of tasks */}
            <div className="taskHeader">
                <p>All Tasks</p>
                <button>+</button>
            </div>
            {/* All task cards container */}
            <div className="allTask">
                <AddNewTask/>
            </div>
        </div>
        
    </>
    
  )
}

export default TaskWindow
