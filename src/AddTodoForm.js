// ./src/AddTodoForm.js

import React from "react";

export default function AddTodoForm({ onAddTodo }) {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target[0].value;
    // console.log(todoTitle);
    onAddTodo(todoTitle);
    event.target[0].value = "";
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title:</label>
        <input id="todoTitle" name="title" />
        <button>Add</button>
      </form>
    </>
  );
}
