import {FaTimes} from 'react-icons/fa'
import { useDispatch } from 'react-redux';



    const Task = ({task}) =>{
    const dispatch= useDispatch();

        //fetch tasks
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


            //delete task
  const deleteTask = async (id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
   //setTasks(tasks.filter((task)=> task.id !== id))
   dispatch(deleteTaskAction(id))
  }

  //delet task action
  const deleteTaskAction = (id) =>{
    return {
      type: "DELETE_TASK",
      id
    }
  }
          console.log(task)
    return (

        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>  fetchTask(task.id)}>
                <h3> {task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=> deleteTask(task.id)}/></h3>
                <p>{task.day}</p>
        </div>
    )
}

  export default Task