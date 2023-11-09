// ./src/SimpleButton.js

// A reusable button component.
// NOTE: Abandoned this SimpleButton component for now. See ./To-Do-App/src/TodoListItem.js

import React from "react";

export default function SimpleButton({ item, onClickFunction, children }) {
  return (
    <button type="button" onClick={() => onClickFunction(item.id)}>
      {children}
    </button>
  );
}
