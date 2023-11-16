// ./src/ToggleButton.js

// A reusable toggle button component.

import React, { useState, useEffect } from "react";

export default function ToggleButton({ children, onToggle, status, count }) {
  const [isToggled, setIsToggled] = useState(null);
  // console.log("isToggled", isToggled); // TODO: Delete this line.
  const handleToggle = () => {
    onToggle(isToggled);
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (status) setIsToggled(null);
  }, [status]);

  // console.log("status:", status, count); // TODO: Delete this line.
  return <button onClick={handleToggle}>{isToggled === null ? "Sort " + children : isToggled ? children + " Descending" : children + " Ascending"}</button>;
}
