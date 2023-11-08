// ./src/TodoListItem.js

// TODO: Clean up this file.

import React, { useState } from "react";
import SimpleButton from "./SimpleButton";

export default function TodoListItem({ item, onRemoveTodo, onEditToDo }) {
  const [status, setStatus] = useState(false);
  // console.log("item:", item);
  // console.log("item.fields.title:", item.fields.title);
  // console.log("item.id:", item.id);
  // // console.log("onRemoveTodo:",onRemoveTodo)
  return (
    <>
      <li>{item.fields.title}</li>
      <SimpleButton item={item} onClickFunction={onRemoveTodo}>
        Remove
      </SimpleButton>
      <SimpleButton item={item} toggleFunction={setStatus} onClickFunction={onEditToDo}>
        Edit
      </SimpleButton>
      {/* <button type="button" onClick={() => {onRemoveTodo(item.id);}}>Remove Old</button>
      <button type="button" onClick={() => {onEditToDo();}}>Edit Old</button> */}

      {status ? <p>what is the status?</p> : <p>what is the status now?</p>}
    </>
  );
}
