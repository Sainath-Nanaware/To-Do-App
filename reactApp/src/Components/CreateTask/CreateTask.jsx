import React, { useRef } from 'react'
import "./CreateTask.css"

function CreateTask({setCreateTask}) {

    const titleRef=useRef()

    function formSubmit(e){
       e.preventDefault();
       setCreateTask((prev)=>!prev)//Use privious state and toggle them
       console.log(titleRef.current.value);
       const createTaskFormData={
            title:titleRef.current.value
       }
       const data={
          method:"POST",
          body:JSON.stringify(createTaskFormData),//convert Object data into json format
          headers:{
            "Content-type":"application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
       }
       newTaskCreate()
       async function newTaskCreate(){

          try{
            const resp=await fetch("https://todo-backend-two-bice.vercel.app/todos",data)
            const respObj=await resp.json()
            if(respObj.status===201){
              alert("Task Create Successfully....!")
              console.log("Task Create Successfully")
            }else if(respObj.status===403){
              alert("Something went's wrong try later.")
            }
          }catch{
            console.log("Internal server error!")
          }
       }      
    }
    function cancelCreateTask(){
       setCreateTask((prev)=>!prev)//Use privious state and toggle them
    }
  return (
    <div className='createTaskContainer'>
        <form   className="createTaskForm" onSubmit={(e)=>formSubmit(e)}>
          <h2>Create Task</h2>
          <label htmlFor="title">Title</label>
          <input type="text"name='title' id='title' placeholder='e.g. Attend Meetting.' ref={titleRef} required /><br></br>
          <label htmlFor="desc">Description</label>
          <textarea type="text" name='desc' id='desc' placeholder='e.g.  Meetting with marketing team ' /><br></br>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" /><br></br>
          <div className="checkInputs">
            <div className="checkInputOne">
                <label htmlFor="completed">Completed</label>
                <input type="checkbox" name='complete'/>
            </div>
            <div className="checkInputTwo">
                <label htmlFor="important">Important</label>
                <input type="checkbox" name='important'/>
            </div>
          </div><br></br>
          <div className="buttonFotter">
              <button id='cancelBtn' onClick={cancelCreateTask}>Cancel</button>
              <button id='createBtn' type='submit'>+ Create Task</button>
          </div>
         
        </form>

    </div>
  )
}

export default CreateTask
