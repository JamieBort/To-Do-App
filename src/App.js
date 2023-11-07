// ./src/App.js

import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

export default function App() {
  const storageKey = "savedTodoList";
  // TODO: Study the difference between Logical OR (||) and Nullish Coalescing (??) operators.
  // To that end, see https://stackoverflow.com/a/66883294
  // And https://www.google.com/search?q=JavaScript++%7C%7C+and+%3F%3F&sca_esv=580203348&sxsrf=AM9HkKl0_A8KWkwaLuRUTDMw6dWS7WVX8w%3A1699390145419&ei=waJKZdySGZqf5NoPlb2xmAY&ved=0ahUKEwic987P4bKCAxWaD1kFHZVeDGMQ4dUDCBA&uact=5&oq=JavaScript++%7C%7C+and+%3F%3F&gs_lp=Egxnd3Mtd2l6LXNlcnAiFUphdmFTY3JpcHQgIHx8IGFuZCA_PzIIEAAYywEYgAQyBhAAGAcYHjIIEAAYywEYgAQyCBAAGMsBGIAEMggQLhjLARiABDIIEAAYywEYgAQyCBAAGMsBGIAEMggQABjLARiABDIIEAAYywEYgAQyCBAAGMsBGIAESKkTUOoEWN8KcAJ4AZABAJgBmQGgAbIFqgEDMi40uAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICCBAAGAgYBxgewgIKEAAYCBgHGB4YCsICCBAAGAcYHhgP4gMEGAAgQYgGAZAGBQ&sclient=gws-wiz-serp
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: address the reject below.
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList: JSON.parse(localStorage.getItem(storageKey)) || [] } });
      }, 2000);
    }).then((result) => {
      setTodoList([...result.data.todoList]);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem(storageKey, JSON.stringify(todoList));
      return;
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => setTodoList([...todoList, newTodo]);
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <p>For the future: add and delete buttons to create lists. Field to name the list.</p>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
      <p>For the future: when the list is empty, have it state "Your list is empty.".</p>
    </>
  );
}
