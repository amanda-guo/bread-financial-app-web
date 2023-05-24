import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function TodoForm() {
  const [input, setInput] = useState("");

  // Create

  const createTodo = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    console.log("input: " + input);
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  return (
    <form onSubmit={createTodo}>
      <TextField
        style={{ width: "100%" }}
        id="outlined-basic"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        label="Add Todo"
        variant="outlined"
      />
    </form>
  );
}
export default TodoForm;
