import { useEffect, useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import type { Todo } from "../../types";
import TodoList from "../TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";
import { getItem, setItem } from "../../utils";

const inintialTodos: Todo[] = [
  {
    id: "1",
    todo: "Clean",
    priority: "medium",
    date: "today",
    completed: false,
  },
  {
    id: "2",
    todo: "Play videogames",
    priority: "low",
    date: "tonight",
    completed: false,
  },
  {
    id: "3",
    todo: "Go to muay thai",
    priority: "high",
    date: "today",
    completed: false,
  },
];
const Main = () => {
  ///CHANGE THE NAME OF THE FILE FROM HOME TO SOMETHING ELSE SINCE THERE IS ALREADY A MAIN.TSX, SO THERE IS NO CONFUSIONS OFR MIX UPS
  const [todos, setTodos] = useState(() => {
    const saved = getItem("my-todo-app-todos");
    return saved && Array.isArray(saved) ? saved : inintialTodos;
  });

  const addTodo = (formData: Omit<Todo, "completed">) => {
    const newTodo: Todo = {
      ...formData,
      id: uuidv4(),
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodoCompletion = (id: string) => {
    const toggledTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(toggledTodos);
  };

  const deleteTodo = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  useEffect(() => {
    const savedTodos = getItem("my-todo-app-todos");
    if (savedTodos && Array.isArray(savedTodos)) {
      setTodos(savedTodos);
    } else {
      setTodos(inintialTodos);
    }
  }, []);

  useEffect(() => {
    setItem("my-todo-app-todos", todos);
  }, [todos]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Smart Todolist
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <AddTodoForm addTodo={addTodo} />
        </div>

        <div>
          <TodoList
            todos={todos}
            toggleTodoCompletion={toggleTodoCompletion}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
