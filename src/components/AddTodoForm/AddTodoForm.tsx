import { useState } from "react";
import type { FormData, Todo } from "../../types";

interface AddTodoFormProps {
  addTodo: (formData: Omit<Todo, "completed">) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
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
    if (
      formData.date === "" ||
      formData.todo === "" ||
      formData.priority === ""
    ) {
      alert("Please enter a value");
      return;
    }
    e.preventDefault();
    console.log(formData);
    addTodo(formData);
    setFormData({
      id: "",
      todo: "",
      priority: "",
      date: "",
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto my-4"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Task</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Add a todo
        </label>
        <input
          type="text"
          name="todo"
          placeholder="Add a task"
          value={formData.todo}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Select priority
        </label>
        <select
          onChange={handleInputChange}
          name="priority"
          value={formData.priority}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Choose one
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Due date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodoForm;
