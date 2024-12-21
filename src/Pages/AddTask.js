import React, { useState } from 'react'
import '../App.css'

const AddTask = ({setShowAddTask, setTasks, tasks, taskToEdit, setTaskToEdit}) => {
  const handleClick = () => {
    if(taskToEdit === null){
       
        setTasks(prev => [...prev, taskName]);
        setShowAddTask(false);
    } else {
      setTasks(prev => {
            const newTasks = [...prev];
            newTasks[taskToEdit] = taskName;
            console.log(newTasks);
            return newTasks;
        });
        setTaskToEdit(null);
    }
    };
    
    const [taskName, setTaskName] = useState("");
  return (
    <div className='container2'>
        <form>
            <input type='text' className='inputStyle' value = {taskName} onChange={(e) => setTaskName(e.target.value)} placeholder={tasks[taskToEdit]}></input>
            <button className='new' onClick={() => handleClick()} type='button'>{taskToEdit ? "Update Task" : "Add Task"}</button>
        </form>
    </div>
  )
}

export default AddTask