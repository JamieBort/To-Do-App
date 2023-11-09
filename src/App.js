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

  // Remove a to-do item from local storage and Airtable table. (DELETE)
  const removeTodo = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
      },
    })
      .then((response) => response.json()) // NOTE: I added this.
      .then((result) => console.log(result)) // NOTE: I added this. TODO: use this response to notify the user that the to-do item has been deleted from Airtable.
      .then(() => {
        // const newTodoList = todoList.filter((todo) => id !== todo.id); // TODO: delete this line.
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
    // console.log("editing item:", item);
    // console.log("todoList:", todoList);

    // 1. Find and replace the title value in todoList
    const updatedTodoListItem = todoList.find(({ id }) => id === item.id);
    // console.log("updatedTodoListItem:", updatedTodoListItem);
    updatedTodoListItem.fields.title = item.title; // TODO: find another way to write this line.
    const newTodoList = todoList.map((u) => (u.id !== updatedTodoListItem.id ? u : updatedTodoListItem));
    // console.log("newTodoList:", newTodoList);
    // todoList.map((u) => (u.id !== updatedTodoListItem.id ? u : updatedTodoListItem));

    // 3. Find and replace the title value in Airtable
    const body = JSON.stringify({ fields: { title: item.title } });

    fetch(`${url}/${item.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then(() => {
        // 2. Update local storage with the new todo list.
        // setTodoList(newTodoList);
        setTodoList(newTodoList);
        setIsError(false);
      })
      // .catch(() => setIsError(true));
      .catch((e) => {
        setIsError(true);
        console.log("e:", e); // NOTE: this line is temporary. The console below didn't work. Because (?) the catch() was never tripped.
        (console.error || console.log).call(console, e.stack || e);
      });
  };

  return (
    <>
      <h1>Todo List</h1>
      {isError && <p>We have an error!!!!</p>}
      <p>For the future: add and delete buttons to create lists. Field to name the list.</p>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} onEditToDo={editTodoItem} />}
      <p>For the future: when the list is empty, have it state "Your list is empty.".</p>
    </>
  );
}
