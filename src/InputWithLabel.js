// ./src/InputWithLabel.js

// A reusable input with label component.

import React, { useEffect, useRef } from "react";

export default function InputWithLabel({ value, onChange, children }) {
  const inputRef = useRef();
  useEffect(() => inputRef.current.focus());

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input ref={inputRef} id="todoTitle" name="title" value={value} onChange={onChange} placeholder="Add a to-do item here."></input>
    </>
  );
}
