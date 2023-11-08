// ./src/AddTodoForm.js

import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";

// TODO: abstract this file by making a reusable FORM component by replacing the contents of the InputWithLabel component but with a button:
// <form onSubmit={handleAddTodo}>
//    <label htmlFor="todoTitle">{children}</label>
//    <input ref={inputRef} id="todoTitle" name="title" value={value} onChange={onChange}></input>
//    <button>label</button>
// </form>

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
