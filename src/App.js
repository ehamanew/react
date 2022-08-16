import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import {connect, useSelector} from "react-redux"

function App() {
  const amount= useSelector(state=>state.amount)
  const [count, setCount]= useState(0)

  const [showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks] = useState([
    
  ])

  useEffect(()=>{
    const getTasks= async () =>{
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  getTasks()
  }, [])

  //fetch tasks
  const fetchTasks = async ()=>{
    const res= await fetch('http://localhost:5000/tasks')
    const data= await res.json()

    return data
  }

    //fetch tasks
    const fetchTask = async (id)=>{
      const res= await fetch(`http://localhost:5000/tasks/${id}`)
      const data= await res.json()
  
      return data
    }

  //delete task
  const deleteTask = async (id) =>{
   // console.log('delete', id)
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
   setTasks(tasks.filter((task)=> task.id !== id))
  }

  //toggle reminder
  const toggleReminder =async (id) =>{
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res= await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data= await res.json()

   // console.log(id)
   setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !data.reminder}: task))

  }

  //add task
  const addTask=async (task)=>{
    const res= await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        text: "qwqwqwqw at School",
        day: "Feb 6th at 1:30pm",
        reminder: true
      })
    })
    const data = await res.json()

    setTasks([...tasks, data])
   // console.log(task)
  // const id = Math.floor(Math.random()*10000)+1
   // const newTask = {id,...task}
   // setTasks([...tasks,newTask])
  }

  return (

    <Router>
    <div className="container">
      <p>{count} {amount}</p>
      <button onClick={()=> setCount(count+1)}/>
      <Header onAddTask={()=> setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      
      <Routes>
        <Route path='/' element={
          <>
          {showAddTask && <AddTask onAddTask={addTask}/>} 
          {tasks.length > 0 ?<Tasks tasks= {tasks} onDelete={deleteTask} toggleReminder={toggleReminder}/> : 'no tasks to show'}
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
