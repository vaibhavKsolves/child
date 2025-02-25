import React from "react";
import TodoApp from "./components/TodoApp";

const Root = () => {
  console.log("Child App Loaded");
  return (<><h1>Child Microfrontend</h1>
    <TodoApp />
  </>);
};

export default Root;
