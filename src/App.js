// ./src/App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import ToggleButton from "./ToggleButton";
import ToggleSwitch from "./ToggleSwitch";
import InputWithLabel from "./InputWithLabel"; // NOTE: This is to be used when the <input/> and <label> tags below are replaced with an <InputWithLabel> component
import { requestGetAllTodo, requestAddATodo, requestDeleteATodo, requestEditATodo } from "./APIs/Airtable_API";

export default function App() {
  const storageKey = "savedTodoList";
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? []);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [binaryStatus, setBinaryStatus] = useState(null);
  const [filteredList, setFilteredList] = useState(""); // NOTE: I don't think I need this.
  // console.log(filteredList);
  // const [toggle, setToggle] = useState(false); // NOTE: I don't think I need this.

  useEffect(() => {
    try {
      if (!isLoading) {
        // Save the to-do list from Airtable into the local storage. And add it to the (unfiltered) filteredList.
        localStorage.setItem(storageKey, JSON.stringify(todoList));
        // setFilteredList(todoList); // TODO: Remove this line of code. And update the comment above.

        // Destructure todoList
        // console.log("todoList:", todoList); // TODO: Remove this line of code.
        const idArr = [],
          createdTimeArr = [],
          fieldsArr = [];
        todoList.forEach((element) => {
          idArr.push(element.id);
          createdTimeArr.push(element.createdTime);
          fieldsArr.push(element.fields);
        });
        console.log("Method One \n idArr:", idArr, "\n createdTimeArr:", createdTimeArr, "\n fieldsArr:", fieldsArr, "\n"); // TODO: Remove this line of code.
      }
    } catch (error) {
      console.error("There was an error:", error); // NOTE: this line is temporary. The console below didn't work. Because (?) the catch() was never tripped.
      (console.error || console.log).call(console, error.stack || error); // TODO: study this line.
      throw error;
    }
  }, [todoList, isLoading]);

  // Load list upon page load.
  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.error("There was an error:", error); // NOTE: this line is temporary. The console below didn't work. Because (?) the catch() was never tripped.
      (console.error || console.log).call(console, error.stack || error); // TODO: study this line.
      throw error;
    }
  }, []);

  // Fetch Todo list from Airtable.
  const getData = async () => {
    try {
      const data = await requestGetAllTodo();
      setTodoList(data);
      setFilteredList(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.error("There was an error:", error); // NOTE: this line is temporary. The console below didn't work. Because (?) the catch() was never tripped.
      (console.error || console.log).call(console, error.stack || error); // TODO: study this line.
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

  // Filtering
  const handleSearchInput = (event) => {
    console.log("event.target.value:", event.target.value);
    console.log("todoList:", todoList);

    // // One method:
    // let str = "";
    // str += event.target.value.toLowerCase();
    // console.log("str:", str);
    // var result = filteredList.filter((obj) => obj.fields.title.toLowerCase() === str);
    // console.log("result:", result);
    // if (result.length > 0) setFilteredList(result);
  };

  const handleToggleChange = () => {
    console.log("handleToggleChange");
    // setToggle(!toggle);
    setBinaryStatus(!binaryStatus);
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
    // TODO: Clean up the isLoading ternary statement below.
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Todo List</h1>

              {isError && <p>We have an error!!!!</p>}
              <AddTodoForm onAddTodo={addTodo} />

              {/* TODO: Replace the <input/> and <label> tags below with an <InputWithLabel> component. */}

              {/* {isLoading ? (
                <div style={{ border: "lightblue solid 2px", padding: "3px", margin: "3px" }}>
                  <p>Loading...</p>
                </div>
              ) : (
                <div style={{ border: "orange solid 2px", padding: "3px", margin: "3px" }}>
                  <TodoList todoList={filteredList} onRemoveTodo={removeTodo} onEditToDo={editTodoItem} />
                </div>
              )} */}

              {isLoading ? (
                <div style={{ border: "lightblue solid 2px", padding: "3px", margin: "3px" }}>
                  <p>Loading...</p>
                </div>
              ) : todoList.length === 0 ? (
                <div style={{ border: "pink solid 2px", padding: "3px", margin: "3px" }}>
                  <p>Your list is empty!!!!</p>
                </div>
              ) : (
                <div style={{ border: "green solid 2px", padding: "3px", margin: "3px" }}>
                  <div style={{ border: "gold solid 2px", padding: "3px", margin: "3px" }}>
                    <span>Sorting: </span>
                    <ToggleButton count="first" statusBoolean={!binaryStatus} onToggle={sortAlphabetical}>
                      Alphabetical
                    </ToggleButton>
                    <ToggleButton count="second" statusBoolean={binaryStatus} onToggle={sortChronological}>
                      Chronological
                    </ToggleButton>
                    <span>sort by date completed</span>
                    <span>sort by due date</span>
                  </div>
                  <div style={{ border: "red solid 2px", padding: "3px", margin: "3px" }}>
                    <span>Searching: </span>
                    <label htmlFor="searchField" name="">
                      Search Field:
                    </label>
                    <input id="searchField" onChange={handleSearchInput} placeholder="Search..." />

                    <ToggleSwitch option01="Include Title" option02="Do not include title" count="third" statusBoolean={!binaryStatus} onToggle={handleToggleChange} />
                    <ToggleSwitch
                      option01="Include Date Created"
                      option02="Do Not Include Date Created"
                      count="fourth"
                      statusBoolean={!binaryStatus}
                      onToggle={handleToggleChange}
                    />
                  </div>
                  <div style={{ border: "orange solid 2px", padding: "3px", margin: "3px" }}>
                    <span>List</span>
                    <div style={{ border: "yellow solid 2px", padding: "3px", margin: "3px" }}>
                      <span>Filter ToDo List by: </span>
                    </div>
                    <div style={{ border: "gold solid 2px", padding: "3px", margin: "3px" }}>
                      <span>Filtered</span>
                      <TodoList todoList={filteredList} onRemoveTodo={removeTodo} onEditToDo={editTodoItem} />
                    </div>
                    <div style={{ border: "red solid 2px", padding: "3px", margin: "3px" }}>
                      <span>Original</span>
                      <TodoList todoList={todoList} onRemoveTodo={removeTodo} onEditToDo={editTodoItem} />
                    </div>
                  </div>
                </div>
              )}
            </>
          }
        ></Route>
        <Route
          path="/secondlist"
          element={
            <>
              <span>Welcome to my second list</span>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
