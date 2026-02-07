import { Link } from "react-router-dom";
import TaskForm from "../TaskForm/TaskForm";
import "./TaskList.css";

function TaskList({ tasks, addTask, deleteTask }) {
  return (
    <div>
      <h1>To-Do List</h1>

      <TaskForm onSubmit={addTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <button onClick={() => deleteTask(task.id)}>&times;</button>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
