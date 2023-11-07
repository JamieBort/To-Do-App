// ./src/InputWithLabel.js

import React, { useEffect, useRef } from "react";

export default function InputWithLabel({ value, onChange, children }) {
  const inputRef = useRef();
  useEffect(() => inputRef.current.focus());

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input ref={inputRef} id="todoTitle" name="title" value={value} onChange={onChange}></input>
    </>
  );
}
