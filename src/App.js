// ./src/App.js
// TODO: Clean up this file.

import React, { useState, useEffect } from "react";
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
        // console.log(result.records); // NOTE: We don't need this console.log().
        setTodoList(result.records);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
        (console.error || console.log).call(console, e.stack || e);
      });
  }, []); // NOTE: Which dependencies do I need to add here? TODO: Add necessary dependencies here.
  // }, [toggleChecked, url, listId, sortField]); // ORIGINAL

  // Adding a to-do item to local storage and Airtable.
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
        console.log(result); // NOTE: the catch didn't log an error while an error showed in the result. TODO: Keep this console.log() until this is addressed.
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

  // Removing a to-do item from setTodoList()
  // TODO: modify this so that it removes the to-do item from the Airtable table as well.
  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>
      {isError && <p>We have an error!!!!</p>}
      <p>For the future: add and delete buttons to create lists. Field to name the list.</p>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
      <p>For the future: when the list is empty, have it state "Your list is empty.".</p>
    </>
  );
}
