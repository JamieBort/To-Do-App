// ./src/ButtonPair.js

// A reusable button component.
// NOTE: Simple. No logic.

import React from "react";

export default function ButtonPair(props) {
  return (
    <>
      <button type="button" onClick={() => props.function1()}>
        {props.name1}
      </button>
      <button type="button" onClick={() => props.function2()}>
        {props.name2}
      </button>
    </>
  );
}
