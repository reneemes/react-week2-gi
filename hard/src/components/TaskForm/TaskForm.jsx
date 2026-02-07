import { useState } from "react";
import "./TasKForm.css";

function TaskForm({ initialValue = "", onSubmit }) {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Task title"
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default TaskForm;
