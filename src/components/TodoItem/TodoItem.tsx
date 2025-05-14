import type { Todo } from "../../types";

interface TodoItemProps {
  todo: Todo;
  toggleTodoCompletion: (id: string) => void;
  deleteTodo: (id: string) => void;
}
const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodoCompletion,
  deleteTodo,
}) => {
  const handleOnChange = () => {
    toggleTodoCompletion(todo.id);
  };

  const handleOnDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="py-3">
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <input
            type="checkbox"
            checked={todo.completed}
            className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            onChange={handleOnChange}
          />
        </div>
        <div className="ml-3 flex-1">
          <p
            className={`text-sm font-medium ${
              todo.completed ? "line-through text-gray-400" : "text-gray-900"
            }`}
          >
            {todo.todo}
          </p>
          <div className="mt-1 flex items-center">
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                todo.priority === "high"
                  ? "bg-red-100 text-red-800"
                  : todo.priority === "medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {todo.priority}
            </span>
            <span className="ml-2 text-xs text-gray-500">{todo.date}</span>
            <button
              onClick={handleOnDelete}
              className="ml-2 text-gray-400 hover:text-red-500 focus:outline-none focus:text-red-500 transition-colors duration-200"
              aria-label="Delete task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
