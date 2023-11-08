// ./src/TodoListItem.js
// TODO: Clean up this file.
import React from "react";

export default function TodoListItem({ item, onRemoveTodo }) {
  // console.log("item:", item);
  // console.log("item.fields.title:", item.fields.title);
  // console.log("item.id:", item.id);
  // // console.log("onRemoveTodo:",onRemoveTodo)
  return (
    <>
      <li>{item.fields.title}</li>
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
