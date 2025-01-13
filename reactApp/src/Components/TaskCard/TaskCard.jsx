import React from 'react'
import './taskCard.css'
function TaskCard() {
  return (
   <>
        <div className="card">
                <h2>Title</h2>
                <p id='descPara'>Description</p>
                <p id='datePara'>01/01/2025</p>
                <button>Completed</button>
        </div>
   
   </>
  )
}

export default TaskCard
