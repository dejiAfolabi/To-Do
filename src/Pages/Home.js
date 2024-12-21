import { useState } from 'react';
import '../App.css';
import Task from '../Components/Task';
import AddTask from './AddTask';

function Home() {
  const deleteTask = (task) => {
    setTasks(tasks.filter(t => t !== task));
  };
  const markAsDone = (task) => {
    if (doneTasks.includes(task)){
      setDoneTasks(doneTasks.filter(t => t !== task));
    } else {
      setDoneTasks(...doneTasks, task);
    }
       
  }
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3", "Letter 4"]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false)
  const markAsComplete = (tasks) => {
    setDoneTasks(tasks);
  }
  const deleteAllTasks = () => {
    setTasks([]);
  }
  console.log(taskToEdit);
  return (
    <div className="container">
      {(showAddTask || taskToEdit !== null) ? <AddTask  setShowAddTask={setShowAddTask} tasks={tasks} setTasks={setTasks} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit}/> : 
      <div>
        <div className='header'>
          <h1 className='to-do'>To Do List</h1>
          <a href="#" onClick={() => setShowAddTask(true)}>Add Task</a>
        </div>
        
        <div>
          {
            tasks.map((task, i) => (
              <Task 
                taskName={task} 
                deleteTask={() => deleteTask(task)} 
                markAsDone ={() => markAsDone(task)} 
                key={i} 
                isCompleted={doneTasks.includes(task)}
                setTaskToEdit={() =>setTaskToEdit(i)}
                setShowAddTask={setShowAddTask}
             />
            ))}
        </div>
        <div className='buttonStyle'>
          <button type='btn' className='markAsDone' onClick={() => markAsComplete(tasks)}>Complete All</button>
          <button type='btn' className='deleteAll' onClick={() => deleteAllTasks(doneTasks)}>Delete All</button>
        </div>
      </div>
      }
    </div>
  );
}

export default Home;
