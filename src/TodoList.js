// ./src/TodoList.js

import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todoList }) {
  const item = todoList.map((item) => {
    return <TodoListItem key={item.id} title={item.title} />;
  });

  return (
    <>
      <ul>{item}</ul>
    </>
  );
}
