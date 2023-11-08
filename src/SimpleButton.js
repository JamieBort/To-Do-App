// ./src/SimpleButton.js

// A reusable button component.

// TODO: Clean up this file.

import React from "react";

export default function SimpleButton({ item, toggleFunction, onClickFunction, children }) {
  //   console.log("item.id:", item.id);
  return (
    <button type="button" onClick={() => onClickFunction(item.id)}>
      {children}
    </button>
  );
}
