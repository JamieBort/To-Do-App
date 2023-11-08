// ./src/App.js

import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

export default function App() {
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
  const storageKey = "savedTodoList";
  // TODO: Study the difference between Logical OR (||) and Nullish Coalescing (??) operators.
  // To that end, see https://stackoverflow.com/a/66883294
  // And https://www.google.com/search?q=JavaScript++%7C%7C+and+%3F%3F&sca_esv=580203348&sxsrf=AM9HkKl0_A8KWkwaLuRUTDMw6dWS7WVX8w%3A1699390145419&ei=waJKZdySGZqf5NoPlb2xmAY&ved=0ahUKEwic987P4bKCAxWaD1kFHZVeDGMQ4dUDCBA&uact=5&oq=JavaScript++%7C%7C+and+%3F%3F&gs_lp=Egxnd3Mtd2l6LXNlcnAiFUphdmFTY3JpcHQgIHx8IGFuZCA_PzIIEAAYywEYgAQyBhAAGAcYHjIIEAAYywEYgAQyCBAAGMsBGIAEMggQLhjLARiABDIIEAAYywEYgAQyCBAAGMsBGIAEMggQABjLARiABDIIEAAYywEYgAQyCBAAGMsBGIAESKkTUOoEWN8KcAJ4AZABAJgBmQGgAbIFqgEDMi40uAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICCBAAGAgYBxgewgIKEAAYCBgHGB4YCsICCBAAGAcYHhgP4gMEGAAgQYgGAZAGBQ&sclient=gws-wiz-serp

  // NOTE: commented out
  // const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? []);
  const [isLoading, setIsLoading] = useState(true);

  // TODO: For https://github.com/Code-the-Dream-School/react/wiki/Lesson-1.8
  // Get this working. Then come back to the following for ideas. Keep in mind that the repos may not be updated.
  // AndreOkounev/ctd-react-sparrow/react-todo-app/src/App.js NOTE: Container.
  // EkaterinaBondavera/react-bald-eagle/src/App.js and imported files. NOTE: Container.
  // MohamedMbareck/react-bald-eagle/src/App.js
  // OksanaMelnyk/react-bald-eagle/src/App.js NOTE: Container.
  // OlgaMusteata/react-bald-eagle/src/App.js NOTE: Container.
  // SarahGwynn/ctd-react/src/App.js NOTE: Container.

  //Fetch Todo list from Airtable  (READ)
  useEffect(() => {
    //Fetch only data with this ListID (filterByFormula=ListID%3D${listId})
    fetch(`${url}`, {
      // fetch(`${url}?view=Grid%20view&filterByFormula=ListID%3D${listId}`, { // ORIGINAL
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        // Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`, // ORIGINAL
      },
    })
      .then((response) => response.json())
      // .then((response) => response.json()) // ORIGINAL
      .then((result) => {
        // console.log(result);
        console.log(result.records);
        // if (sortField === 'title') {
        //     sortByTitle(toggleChecked, result.records);
        // } else {
        //     sortByCompleted(toggleChecked, result.records);
        // }
        // NOTE: commented out
        // setTodoList(result.records);
        setIsLoading(false);
        // setIsError(false);
      })
      .catch(() => {
        // setIsError(true)
        setIsLoading(false);
      });
  }, []);
  // }, [toggleChecked, url, listId, sortField]); // ORIGINAL

  // NOTE: commented out
  // useEffect(() => {
  //   // TODO: address the reject below.
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({ data: { todoList: JSON.parse(localStorage.getItem(storageKey)) || [] } });
  //     }, 2000);
  //   }).then((result) => {
  //     setTodoList([...result.data.todoList]);
  //     setIsLoading(false);
  //   });
  // }, []);

  // NOTE: commented out
  // useEffect(() => {
  //   if (isLoading === false) {
  //     localStorage.setItem(storageKey, JSON.stringify(todoList));
  //     return;
  //   }
  // }, [todoList, isLoading]);

  // NOTE: commented out
  // const addTodo = (newTodo) => setTodoList([...todoList, newTodo]);
  // const removeTodo = (id) => {
  //   const newTodoList = todoList.filter((todo) => todo.id !== id);
  //   setTodoList(newTodoList);
  // };

  return (
    <>
      <h1>Todo List</h1>
      <p>For the future: add and delete buttons to create lists. Field to name the list.</p>
      {/* NOTE: commented out */}
      {/* <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />} */}

      {/* NOTE: modify this */}
      {/* <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />} */}
      <p>For the future: when the list is empty, have it state "Your list is empty.".</p>
    </>
  );
}
