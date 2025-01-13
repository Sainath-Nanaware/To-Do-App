import React,{useState} from 'react'
import './taskCard.css'
function TaskCard({title,status}) {
    // const [taskStatus,setStatus]=useState("")
    // if(status===false){
    //     setStatus("Uncompleted")
    // }else{
    //     setStatus("Completed")

    // }
    const taskStatus=(status==true?"Completed":"Pending");
  return (
   <>
        <div className="card">
                <h2>{title}</h2>
                <p id='descPara'>Description</p>
                <p id='datePara'>01/01/2025</p>
                <button>{taskStatus}</button>
        </div>
   
   </>
  )
}

export default TaskCard
