import React from "react";

const todoList = [
  { id: 1, title: "Do this" },
  { id: 2, title: "Now do this" },
  { id: Date.now(), title: "And do this last" },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
