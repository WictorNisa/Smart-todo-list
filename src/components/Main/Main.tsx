import { useState } from "react";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

const inintialTodos = [
  {
    text: "Clean",
    completed: false,
  },
  {
    text: "Play videogames",
    completed: false,
  },
  {
    text: "Go to muay thai",
    completed: false,
  },
];
const Main = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
  };

  return (
    <div>
      Main
      <AddTodoForm />
    </div>
  );
};

export default Main;
