// ./src/App.js

import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

export default function App() {
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
  const storageKey = "savedTodoList";
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? []);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Saving the to-do list from Airtable into the local storage.
  useEffect(() => {
    try {
      if (!isLoading) localStorage.setItem(storageKey, JSON.stringify(todoList));
    } catch (e) {
      (console.error || console.log).call(console, e.stack || e);
    }
  }, [todoList, isLoading]);

  // Fetch Todo list from Airtable (READ)
  useEffect(() => {
    fetch(`${url}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result.records:", result.records);

        setTodoList(result.records);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
        (console.error || console.log).call(console, e.stack || e);
      });
  }, [url]); // NOTE: Which dependencies do I need to add here? TODO: Add necessary dependencies here.

  // Adding a to-do item to local storage and Airtable table. (POST)
  const addTodo = (newTodo) => {
    const body = JSON.stringify({
      fields: { title: newTodo.title },
    });

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: body,
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        // console.log("That to-do item has been added to the Airtable table:", result); // NOTE: the catch didn't log an error while an error showed in the result. TODO: Keep this console.log() until this is addressed.
        setTodoList([...todoList, result]);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((e) => {
        setIsError(true);
        console.log("e:", e); // NOTE: this line is temporary. The console below didn't work. Because (?) the catch() was never tripped.
        (console.error || console.log).call(console, e.stack || e);
      });
  };

  // Remove a to-do item from local storage and Airtable table. (DELETE)
  const removeTodo = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((result) => console.log("That to-do item has been removed/deleted from the Airtable table:", result)) // TODO: use this response to notify the user that the to-do item has been deleted from Airtable.
      .then(() => {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
        setIsError(false);
      })
      .catch((e) => {
        setIsError(true);
        console.log("e:", e); // NOTE: this line is temporary. The console below didn't work. Because (?) the catch() was never tripped.
        (console.error || console.log).call(console, e.stack || e);
      });
  };

  // Edit a to-do item in local storage and Airtable table. (UPDATE)
  const editTodoItem = (item) => {
    // 1. Find and replace the title value in todoList
    const todoListItem = todoList.find(({ id }) => id === item.id);

    // Update the todo item with the new title.
    todoListItem.fields.title = item.title; // TODO: find another way to write this line.

    // Create a new todo list with the updated item.
    const newTodoList = todoList.map((u) => (u.id !== todoListItem.id ? u : todoListItem));

    // 3. Update the Airtable table with the new title.
    const body = JSON.stringify({ fields: { title: item.title } });

    fetch(`${url}/${item.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((response) => response.json())
      .then((result) => console.log("That to-do item has been updated in the Airtable table:", result)) // TODO: use this response to notify the user that the to-do item has been updated in Airtable.
      .then(() => {
        // 2. Update local storage with the new todo list.
        setTodoList(newTodoList);
        setIsError(false);
      })
      .catch((e) => {
        setIsError(true);
        console.log("e:", e); // NOTE: this line is temporary. The console below didn't work. Because (?) the catch() was never tripped.
        (console.error || console.log).call(console, e.stack || e);
      });
  };

  // Sorting
  // TODO: Have each sort update the Airtable table as well. This would entail an API call with a PUT method - see the edit logic.

  // TODO: Create a reusable two-button component for each of these ascending/descending pairs of buttons.

  const sortAlphabeticalAscending = () => {
    // console.log("sortng...");
    const sorted = [...todoList].sort((a, b) =>
      a.fields.title.toLowerCase() === b.fields.title.toLowerCase() ? 0 : a.fields.title.toLowerCase() < b.fields.title.toLowerCase() ? -1 : 1,
    );
    setTodoList(sorted);
  };

  const sortAlphabeticalDescending = () => {
    // console.log("descending");
    const sorted = [...todoList].sort((a, b) =>
      a.fields.title.toLowerCase() === b.fields.title.toLowerCase() ? 0 : a.fields.title.toLowerCase() < b.fields.title.toLowerCase() ? 1 : -1,
    );
    setTodoList(sorted);
  };

  // Sort based on date created ascending
  const sortChronologicalAscending = () => {
    // console.log("todoList:", todoList);
    const sorted = [...todoList].sort((a, b) => (a.createdTime === b.createdTime ? 0 : a.createdTime < b.createdTime ? -1 : 1));
    // console.log("sorted:", sorted);
    setTodoList(sorted);
  };

  // Sort based on date created descending
  const sortChronologicalDescending = () => {
    // console.log("descending");
    // console.log("todoList:", todoList);
    const sorted = [...todoList].sort((a, b) => (a.createdTime === b.createdTime ? 0 : a.createdTime < b.createdTime ? 1 : -1));
    // console.log("sorted:", sorted);
    setTodoList(sorted);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Todo List</h1>
              <button type="button" onClick={() => sortAlphabeticalAscending()}>
                Sort Alphabetical Ascending
              </button>
              <button type="button" onClick={() => sortAlphabeticalDescending()}>
                Sort Alphabetical Descending
              </button>
              <button type="button" onClick={() => sortChronologicalAscending()}>
                Sort Chronological Ascending
              </button>
              <button type="button" onClick={() => sortChronologicalDescending()}>
                Sort Chronological Descending
              </button>
              {isError && <p>We have an error!!!!</p>}
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} onEditToDo={editTodoItem} />}
              {todoList.length === 0 && <p>Your list is empty!!!!</p>}
            </>
          }
        ></Route>
        <Route
          path="/secondlist"
          element={
            <>
              <h2>Welcome to my second list</h2>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
