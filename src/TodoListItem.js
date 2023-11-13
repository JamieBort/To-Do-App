// ./src/TodoListItem.js

// TODO: Create a reusable two-button component for these Remove and Edit pairs of buttons.

import React, { useState } from "react";
// NOTE: Abandoned this SimpleButton component for now. too complicated to implement in the middle of working on other things. TODO: come back to this concept. Maybe.
// import SimpleButton from "./SimpleButton";
import InputWithLabel from "./InputWithLabel";

export default function TodoListItem({ item, onRemoveTodo, onEditToDo }) {
  const [status, setStatus] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleEdit = (event) => setTodoTitle(event.target.value);
  const handleEditTodo = (event) => {
    event.preventDefault();
    onEditToDo({ title: todoTitle, id: item.id });
    setTodoTitle("");
    setStatus(!status);
  };

  return (
    <>
      <li>
        {item.fields.title}
        <ul>
          <li>Date Created: {item.createdTime}</li>
          <li>
            <button
              type="button"
              onClick={() => {
                onRemoveTodo(item.id);
              }}
            >
              Remove
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setStatus(!status);
              }}
            >
              Edit
            </button>
            {status ? (
              <form onSubmit={handleEditTodo}>
                <InputWithLabel value={todoTitle} onChange={handleTitleEdit}>
                  Edit title:
                </InputWithLabel>{" "}
                <button>Change</button>
              </form>
            ) : null}
          </li>
        </ul>
      </li>

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
