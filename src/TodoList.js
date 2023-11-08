// ./src/TodoList.js
// TODO: Clean up this file.

import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList, onRemoveTodo, onEditToDo }) {
  // // console.log("to do list:", todoList);
  // console.log("todoList.id:", todoList[0].id);
  // console.log("todoList.fields:", todoList[0].fields.title);

  //   console.log("todoList:", todoList);
  //   console.log("onRemoveTodo:", onRemoveTodo);

  const item = todoList.map((item) => <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} onEditToDo={onEditToDo} />);
  return <ul>{item}</ul>;
}
