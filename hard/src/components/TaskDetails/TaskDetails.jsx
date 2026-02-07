import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../TaskForm/TaskForm";

function TaskDetails({ tasks, updateTask, deleteTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((task) => task.id === id);

  const handleUpdate = (newTitle) => {
    updateTask(id, newTitle);
    navigate("/");
  };

  const handleDelete = () => {
    deleteTask(id);
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Task</h1>

      <TaskForm initialValue={task.title} onSubmit={handleUpdate} />

      <button onClick={handleDelete}>Delete Task</button>
      <br />
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default TaskDetails;
