// ./src/ButtonPair.js

// A reusable button component.
// NOTE: Simple. No logic.

import React from "react";

export default function ButtonPair({ function1, function2, name1, name2, ...props }) {
  return (
    <>
      <button type="button" onClick={() => function1()}>
        {name1}
      </button>
      <button type="button" onClick={() => function2()}>
        {name2}
      </button>
    </>
  );
}
