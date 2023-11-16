// ./src/ButtonPair.js

// A reusable button component.
// NOTE: Simple. No logic.

import React from "react";

export default function ButtonPair({ function1, function2, name1, name2, ...props }) {
  return (
    <div style={{ border: "orange solid 2px", padding: "3px", margin: "3px" }}>
      <button type="button" onClick={() => function1()}>
        {name1}
      </button>
      <button type="button" onClick={() => function2()}>
        {name2}
      </button>
    </div>
  );
}
