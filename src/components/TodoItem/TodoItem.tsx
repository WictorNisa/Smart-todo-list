import type { Todo } from "../../types";

interface TodoItemProps {
  todo: Todo;
}
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li className="py-3">
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <input
            type="checkbox"
            checked={todo.completed}
            className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            // You'll add an onChange handler later
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
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
