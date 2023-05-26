import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoForm from "./firebasetest/TodoForm";
import TodoList from "./firebasetest/TodoList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </Router>

      {/* <TodoForm />
      <TodoList /> */}
    </div>
  );
}

export default App;
