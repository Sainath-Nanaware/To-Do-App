import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import CreateTask from './Components/CreateTask/CreateTask'
import Login from './Pages/Login/Login'
import Registration from './Pages/Registration/Registration'
import TaskCard from './Components/TaskCard/TaskCard'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/createTask' element={<CreateTask/>}/>
          <Route path='/taskCard' element={<TaskCard/>}/>


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
