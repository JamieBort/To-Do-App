// ./src/AddTodoForm.js

import React from "react";

const AddTodoForm = () => {
  return (
    <>
      <form>
        <label htmlFor="todoTitle">Title:</label>
        <input id="todoTitle" />
        <button>Add</button>
      </form>
    </>
  );
};

export default AddTodoForm;
