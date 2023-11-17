// ./src/App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import ToggleButton from "./ToggleButton";
import { requestGetAllTodo, requestAddATodo, requestDeleteATodo, requestEditATodo } from "./APIs/Airtable_API";

export default function App() {
  const storageKey = "savedTodoList";
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? []);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [binaryStatus, setBinaryStatus] = useState(null);

  // Save the to-do list from Airtable into the local storage.
  useEffect(() => {
    try {
      if (!isLoading) localStorage.setItem(storageKey, JSON.stringify(todoList));
    } catch (e) {
      (console.error || console.log).call(console, e.stack || e);
    }
  }, [todoList, isLoading]);

  // Load list upon page load.
  useEffect(() => {
    getData();
  }, []);

  // Fetch Todo list from Airtable.
  const getData = async () => {
    try {
      const data = await requestGetAllTodo();
      setTodoList(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.error("There was an error:", error);
      throw error;
    }
  };

  // Add a to-do item to local storage and Airtable table.
  const addTodo = async (newTodo) => {
    try {
      const data = await requestAddATodo(newTodo);
      // console.log("data addTodo:", data);
      // console.log("todoList:", todoList);
      setTodoList([...todoList, data]);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.error("There was an error:", error); // NOTE: this line is temporary. The console below didn't work. Because (?) the catch() was never tripped.
      (console.error || console.log).call(console, error.stack || error); // TODO: study this line.
      throw error;
    }
  };

  // Remove a to-do item from local storage and Airtable table.
  const removeTodo = async (id) => {
    try {
      const data = await requestDeleteATodo(id);
      console.log("That to-do item has been removed/deleted from the Airtable table:", data); // TODO: Use this response to notify the user that the to-do item has been deleted from Airtable.

      // Update todoList:
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);

      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.error("There was an error:", error); // NOTE: this line is temporary. The console below didn't work. Because (?) the catch() was never tripped.
      (console.error || console.log).call(console, error.stack || error); // TODO: study this line.
      throw error;
    }
  };

  // Edit a to-do item in local storage and Airtable table. (UPDATE)
  const editTodoItem = async (item) => {
    try {
      const data = await requestEditATodo(item);
      console.log("That to-do item has been edited/updated from the Airtable table:", data); // TODO: Use this response to notify the user that the to-do item has been edited/updated in Airtable.

      // Find and replace the title value in todoList
      const todoListItem = todoList.find(({ id }) => id === item.id);

      // Update the todo item with the new title.
      todoListItem.fields.title = item.title; // TODO: find another way to write this line.

      // Create a new todo list with the updated item.
      const newTodoList = todoList.map((u) => (u.id !== todoListItem.id ? u : todoListItem));
      setTodoList(newTodoList);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.error("There was an error:", error); // NOTE: this line is temporary. The console below didn't work. Because (?) the catch() was never tripped.
      (console.error || console.log).call(console, error.stack || error); // TODO: study this line.
      throw error;
    }
  };

  // Sorting
  // NOTE: used the response to this "sort an array with react hooks" Stack Overflow post: https://stackoverflow.com/a/58087915
  // TODO: Have each sort update the Airtable table as well. This would entail an API call with a PUT method - see the edit logic.
  // TODO: add feedback to user if they hit the button and the list is already sorted that way, inform the user "the list is already sorted alphabetically ascending".

  const sortAlphabetical = (param) => {
    let sorted;
    if (!param)
      sorted = [...todoList].sort((a, b) =>
        a.fields.title.toLowerCase() === b.fields.title.toLowerCase() ? 0 : a.fields.title.toLowerCase() < b.fields.title.toLowerCase() ? 1 : -1,
      );
    else if (param)
      sorted = [...todoList].sort((a, b) =>
        a.fields.title.toLowerCase() === b.fields.title.toLowerCase() ? 0 : a.fields.title.toLowerCase() < b.fields.title.toLowerCase() ? -1 : 1,
      );
    else sorted = todoList;
    setTodoList(sorted);
    setBinaryStatus(true);
  };

  const sortChronological = (param) => {
    let sorted;
    if (!param) sorted = [...todoList].sort((a, b) => (a.createdTime === b.createdTime ? 0 : a.createdTime < b.createdTime ? 1 : -1));
    else if (param) sorted = [...todoList].sort((a, b) => (a.createdTime === b.createdTime ? 0 : a.createdTime < b.createdTime ? -1 : 1));
    else sorted = todoList;
    setTodoList(sorted);
    setBinaryStatus(false);
  };

  // Sort based on date edited descending
  // TODO: Implement this logic.

  // Sort based on date edited descending
  // TODO: Implement this logic.

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Todo List</h1>
              <div style={{ border: "gold solid 2px", padding: "3px", margin: "3px" }}>
                {/* <ToggleButton onToggle={sortAlphabetical}>Alphabetical</ToggleButton> */}
                <ToggleButton count="first" statusBoolean={!binaryStatus} onToggle={sortAlphabetical}>
                  Alphabetical
                </ToggleButton>
                <ToggleButton count="second" statusBoolean={binaryStatus} onToggle={sortChronological}>
                  Chronological
                </ToggleButton>
                {/* <ToggleButton onToggle={sortChronological}>Chronological</ToggleButton> */}
              </div>
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
