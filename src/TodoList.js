// ./src/TodoList.js

import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList, onRemoveTodo, onEditToDo }) {
  const item = todoList.map((item) => <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} onEditToDo={onEditToDo} />);
  return <ul>{item}</ul>;
}
