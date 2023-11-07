// ./src/App.js

import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const useSemiPersistentState = () => {
  const storageKey = "savedTodoList";
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

export default function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => setTodoList([...todoList, newTodo]);
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((item) => {
      if (item.id === id) return false;
      else return true;
    });
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <p>For the future: add and delete buttons to create lists. Field to name the list.</p>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}
