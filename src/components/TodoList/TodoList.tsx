import type { Todo } from "../../types";
import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Tasks</h2>
      
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No tasks yet. Add one to get started!</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
