import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { db } from "./firebase";
import { query, collection, onSnapshot, addDoc } from "firebase/firestore";

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

  // Read

  // useEffect(() => {
  //   const q = query(collection(db, 'todos'))
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let todosArr = []
  //     querySnapshot.forEach((doc) => {
  //       todosArr.push({...doc.data(), id: doc.id})
  //     });
  //     setTodos(todosArr)
  //   })
  //   return () => unsubscribe()
  // }, [])

  // Update

  // Delete

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
