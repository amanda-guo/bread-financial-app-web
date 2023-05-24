import React from "react";
import "./App.css";
import TodoForm from "./firebasetest/TodoForm";
import TodoList from "./firebasetest/TodoList";

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
