import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Divider from "@mui/material/Divider";
import { db } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

function TodoList() {
  const [todos, setTodos] = useState<any[]>([]);

  // Read

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr: any[] = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {todos.map((todo: any, i: number) => (
        <React.Fragment key={todo.id}>
          <Todo todo={todo} />
          {i < todos.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  );
}
export default TodoList;
