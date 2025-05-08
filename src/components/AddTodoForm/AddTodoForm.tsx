import { useState } from "react";

const AddTodoForm = () => {
  const [formData, setFormData] = useState({
    todo: "",
    priority: "",
    date: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Add a todo</label>
      <input
        type="text"
        name="todo"
        placeholder="Add a task"
        value={formData.todo}
        onChange={handleInputChange}
      />
      <label>Select priority</label>
      <select
        onChange={handleInputChange}
        name="priority"
        value={formData.priority}
      >
        <option value="" disabled>
          Choose one
        </option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <label>Due date</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
