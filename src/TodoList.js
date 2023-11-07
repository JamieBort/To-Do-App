// ./src/TodoList.js

import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList, onRemoveTodo }) {
  //   console.log("todoList:", todoList);
  //   console.log("onRemoveTodo:", onRemoveTodo);
  const item = todoList.map((item) => <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />);
  return <ul>{item}</ul>;
}
