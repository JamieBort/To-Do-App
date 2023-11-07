// ./src/TodoListItem.js

import React from "react";

export default function TodoListItem({ item, onRemoveTodo }) {
  return (
    <>
      <li>{item.title}</li>
      <button
        type="button"
        onClick={() => {
          onRemoveTodo(item.id);
        }}
      >
        Remove
      </button>
    </>
  );
}
