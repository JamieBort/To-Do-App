// ./src/TodoListItem.js

// TODO: Clean up this file.

import React, { useState } from "react";
// NOTE: Abandoned this SimpleButton component for now. too complicated to implement in the middle of working on other things. TODO: come back to this concept. Maybe.
// import SimpleButton from "./SimpleButton";
import InputWithLabel from "./InputWithLabel";

export default function TodoListItem({ item, onRemoveTodo, onEditToDo }) {
  // NOTE: Abandoned this SimpleButton component for now. too complicated to implement in the middle of working on other things. TODO: come back to this concept. Maybe.
  const [status, setStatus] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleEdit = (event) => setTodoTitle(event.target.value);
  const handleEditTodo = (event) => {
    event.preventDefault();
    onEditToDo({ title: todoTitle, id: item.id });
    setTodoTitle("");
    setStatus(!status);
  };

  // console.log("item:", item);
  // console.log("item.fields.title:", item.fields.title);
  // console.log("item.id:", item.id);
  // // console.log("onRemoveTodo:",onRemoveTodo)
  // console.log("status:", status);
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
      <button
        type="button"
        onClick={() => {
          setStatus(!status);
        }}
      >
        Edit - opens edit field
      </button>
      {status ? (
        <form onSubmit={handleEditTodo}>
          <InputWithLabel value={todoTitle} onChange={handleTitleEdit}>
            Edit title:
          </InputWithLabel>{" "}
          <button>Change</button>
        </form>
      ) : null}

      {/* NOTE: Abandoned this SimpleButton component for now. Too complicated to implement in the middle of working on other things. TODO: come back to this concept. Maybe. */}
      {/* <SimpleButton item={item} onClickFunction={onRemoveTodo}>
        Remove
      </SimpleButton>
      <SimpleButton item={item} onClickFunction={setStatus}>
        Edit (next add onEditToDo)
      </SimpleButton>
      {status ? <p>what is the status?</p> : <p>what is the status now?</p>} */}
    </>
  );
}
