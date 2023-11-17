// ./src/ToggleSwitch.js

// A reusable toggle switch component.

// ***********************************************************
// NOTE: Maybe build one rather than install another package?
// https://www.npmjs.com/package/react-switch

// NOTE: For the parent component:
// const [toggleChecked, setToggleChecked] = useState(true);
// const handleToggleChange = (value) => setToggleChecked(value);
// ***********************************************************

// NOTE: Currently not using this file.

import React from "react";
import ReactSwitch from "react-switch";

// Switch sort direction using <ReactSwitch/>
export default function ToggleSwitch({ toggleChecked, handleToggleChange }) {
  return (
    <>
      <label htmlFor="ReactSwitch">{toggleChecked ? "Sort DESC" : "Sort ASC"}</label>
      <ReactSwitch checked={toggleChecked} onChange={handleToggleChange} onColor="gold" offColor="black" />
    </>
  );
}
