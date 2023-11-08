// ./src/AddTodoForm.js

import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

export default function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (event) => setTodoTitle(event.target.value);
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel value={todoTitle} onChange={handleTitleChange}>
          Title:
        </InputWithLabel>
        <button>Add</button>
      </form>
    </>
  );
}
