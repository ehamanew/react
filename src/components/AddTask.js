import { useState } from "react"

const AddTask = ({onAddTask}) =>{



    
  //state
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert('pleas add task')
            return
        }

        onAddTask({text, day, reminder})

        setDay('')
        setReminder(false)
        setText('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e)=> setText(e.target.value)}/>
            </div> 
            <div className="form-control">
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={day} onChange={(e)=> setDay(e.target.value)}/>
            </div>  
            <div className="form-control form-control-check" >
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)} checked={reminder}/>
            </div>  

            <input type='submit' value='save' className="btn btn-block"/>
        </form>
    )
}

  export default AddTask