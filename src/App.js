import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import {connect, useSelector} from "react-redux"
import { useDispatch } from "react-redux"

function App() {

  const dispatch= useDispatch();
  const tasksFromStore= useSelector((state)=>state.tasks);

  const [showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks] = useState([
    
  ])

  useEffect(()=>{
    console.log("#######");
    fetchTasks();
  }, [])

  //fetch tasks
  const fetchTasks = async ()=>{
    const res= await fetch('http://localhost:5000/tasks')
    const data= await res.json()
    dispatch(fetchTasksAction(data));
    //return data
  }

  //action fetch tasks
  const fetchTasksAction = (tasks) =>{
    return {
      type:"GET_TASKS",
      tasks
    }
  }

    // //fetch tasks
    const fetchTask = async (id)=>{
      const res= await fetch(`http://localhost:5000/tasks/${id}`)
      const data= await res.json()
      dispatch(fetchTaskAction(data.id))
      //return data
    }

    //fetch task action
    const fetchTaskAction = (id)=>{
      return {
          type: "TOGGLE_TASK",
          id
      }
    }



  //add task
  const addTask=async (task)=>{
    const res= await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    //setTasks([...tasks, data])
    dispatch(addTaskAction(data))
  }

  //fetch add task action
  const addTaskAction=(data)=>{
    return {
      type: "ADD_TASK",
      data
    }
  }

  return (

    <Router>
    <div className="container">
      <Header onAddTask={()=> setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      
      <Routes>
        <Route path='/' element={
          <>
          {showAddTask && <AddTask /*onAddTask={addTask}*/ />} 
          {tasksFromStore.length > 0 ?<Tasks  /*onDelete={deleteTask}*//> : 'no tasks to show'}
          </>
        }>

        </Route>
      <Route path='/about' element={<About/>}/>
      </Routes>
      
    <Footer/>
    </div>
    </Router>
  )

}

export default connect(store=>store)(App);
