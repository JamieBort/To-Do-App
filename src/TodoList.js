// ./src/TodoList.js

import React from "react";

const todoList = [
  { id: 1, title: "Do this" },
  { id: 2, title: "Now do this" },
  { id: Date.now(), title: "And do this last" },
];

const TodoList = () => {
  return (
    <>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoList;
