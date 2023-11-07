// ./src/AddTodoForm.js

import React, { useState } from "react";

export default function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (event) => setTodoTitle(event.target.value);

  const handleAddTodo = (event) => {
    event.preventDefault();
    // onAddTodo({ title: todoTitle, id: Date.now() });
    onAddTodo(todoTitle);
    setTodoTitle("");
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title:</label>
        <input id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}></input>
        <button>Add</button>
      </form>
    </>
  );
}
