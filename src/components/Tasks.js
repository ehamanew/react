import { useEffect } from "react";
import { useSelector } from "react-redux";
import Task from "./Task"
const Tasks = () =>{
    const tasksFromStore= useSelector((state)=>state.tasks);
   
   
    return (
        <>
            {tasksFromStore.map((task)=>(
            <Task key={task.id} task ={task} ></Task>
            ))}
        </>
    )
}

  export default Tasks