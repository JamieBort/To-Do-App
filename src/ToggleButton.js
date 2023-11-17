// ./src/ToggleButton.js

// A reusable toggle button component.

import React, { useState, useEffect } from "react";

export default function ToggleButton({ children, onToggle, statusBoolean }) {
  const [isToggled, setIsToggled] = useState(null);
  const handleToggle = () => {
    onToggle(isToggled);
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (statusBoolean) setIsToggled(null);
  }, [statusBoolean]);

  return <button onClick={handleToggle}>{isToggled === null ? "Sort " + children : isToggled ? children + " Descending" : children + " Ascending"}</button>;
}
