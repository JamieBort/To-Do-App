// ./src/ToggleSwitch.js

// NOTE:
// A reusable toggle switch component.
// Used for ascending/descending sorting.

// TODO: Address this component for accessibility purposes. For example, change the <div> tags.

import React, { useState, useEffect } from "react";

// TODO: Remove the children parameter.

export default function ToggleSwitch({ option01 = "set option 1", option02 = "set option 2", children, onToggle, statusBoolean }) {
  console.log("onToggle:", onToggle);
  console.log("statusBoolean:", statusBoolean);
  // console.log("handleToggleChange:", handleToggleChange);

  // TODO: Determine which useState below to use.
  // const [isToggled, setIsToggled] = useState(false);
  // const [isToggled, setIsToggled] = useState(statusBoolean);
  const [isToggled, setIsToggled] = useState(null);

  // TODO: Clean up the styles object.
  const styles = {
    toggleContainer: {
      position: "relative",
      width: "300px",
      // height: "80px",
      height: "50px",
      backgroundColor: "aqua",
      cursor: "pointer",
      // user-select: none;
      MozUserSelect: "none",
      WebkitUserSelect: "none",
      msUserSelect: "none",
      // border-radius: 3px;
      borderRadius: "3px",
      padding: "2px",
      // margin-top: 20px;
      marginTop: "20px",
    },

    toggleBtn: {
      display: "flex",
      //     justify-content: center;
      justifyContent: "center",
      //     align-items: center;
      alignItems: "center",
      //     box-sizing: border-box;
      boxSizing: "border-box",
      // width: "38px",
      // fontWidth: "bold",
      //     font-size: 14px;
      fontSize: "14px",
      //     line-height: 16px;;
      lineHeight: "16px",
      cursor: "pointer",
      color: "#fff",
      //     background-color: #cf0a80;
      backgroundColor: isToggled ? "#cf0a80" : "#707070",
      // backgroundColor: statusBoolean ? "#cf0a80" : "#707070",
      // backgroundColor: "#cf0a80",
      //     box-shadow: 0 2px 4px rgb(0, 0, 0, 0.25);
      boxShadow: "0 2px 4px rgb(0, 0, 0, 0.25)",
      padding: "8px 12px",
      //     border-radius: 3px;
      borderRadius: "3px",
      position: "absolute",
      transition: "all 0.2s ease",
      left: isToggled ? "150px" : "2px",
      // left: statusBoolean ? "150px" : "2px",
    },

    // disable: {
    //   backgroundColor: "#707070",
    //   left: "2px",
    // },
  };

  const handleToggle = () => {
    // onToggle(isToggled);
    // toggle(isToggled);
    setIsToggled(!isToggled);
  };
  // console.log("isToggled:", isToggled);

  // TODO: remove this useEffect.
  // useEffect(() => {
  //   if (statusBoolean) setIsToggled(null);
  // }, [statusBoolean]);

  return (
    <div className="toggle-container" style={styles.toggleContainer} onClick={onToggle}>
      <button className={`styles.toggleBtn ${isToggled ? "disable" : ""}`} style={styles.toggleBtn} onClick={handleToggle}>
        {isToggled ? option01 : option02}
      </button>
    </div>
  );
}
