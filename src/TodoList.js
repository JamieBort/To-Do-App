// ./src/TodoList.js

import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  { id: 1, title: "Do this" },
  { id: 2, title: "Now do this" },
  { id: Date.now(), title: "And do this last" },
];

const item = todoList.map((item) => {
  return <TodoListItem key={item.id} title={item.title} />;
});

const TodoList = () => {
  return (
    <>
      <ul>{item}</ul>
    </>
  );
};

export default TodoList;
