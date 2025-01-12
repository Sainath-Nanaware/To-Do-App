import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import CreateTask from './Components/CreateTask/CreateTask'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createTask' element={<CreateTask/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
