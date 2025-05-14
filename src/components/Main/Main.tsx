import { useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import type { Todo } from "../../types";
import TodoList from "../TodoList/TodoList";

const inintialTodos: Todo[] = [
  {
    todo: "Clean",
    priority: "medium",
    date: "today",
    completed: false,
  },
  {
    todo: "Play videogames",
    priority: "low",
    date: "tonight",
    completed: false,
  },
  {
    todo: "Go to muay thai",
    priority: "high",
    date: "today",
    completed: false,
  },
];
const Main = () => {
  const [todos, setTodos] = useState(inintialTodos);

  const addTodo = (formData: Omit<Todo, "completed">) => {
    const newTodo: Todo = {
      ...formData,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Smart Todolist</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <AddTodoForm addTodo={addTodo} />
        </div>
        
        <div>
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default Main;
