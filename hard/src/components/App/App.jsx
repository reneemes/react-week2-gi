import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import TaskList from '../TaskList/TaskList';
import TaskDetails from '../TaskDetails/TaskDetails';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now().toString(), title }]);
  };

  const updateTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={
          <TaskList 
            tasks={tasks}
            addTask={addTask}
            deleteTask={deleteTask}
          />
        } 
      />
      <Route path="/task/:id" element={
          <TaskDetails 
            tasks={tasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        } 
      />
    </Routes>  
  )
}

export default App
