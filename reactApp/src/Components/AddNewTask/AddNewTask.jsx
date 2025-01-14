import React, { useState } from 'react'
import "./AddNewTask.css"
import { Link } from 'react-router-dom'
import CreateTask from '../CreateTask/CreateTask'
const AddNewTask = () => {
  const [createTask,setCreateTask]=useState(false)
  function showPopup(){
    console.log("hi")
    setCreateTask(!createTask)
  }
  return (
    <>
        <div className='newTaskContainer'onClick={showPopup} >
          <p >+ Add New Task</p>
        </div>
        {/* {createTask && <CreateTask/>} */}
    </>
      )
}

export default AddNewTask
