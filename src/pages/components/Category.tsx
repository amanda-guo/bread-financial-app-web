// import React from "react";
// import Switch from "@mui/material/Switch";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { db } from "../../firebase";
// import { updateDoc, doc, deleteDoc } from "firebase/firestore";

// function Category(props: any) {
//   const { category } = props;

//   // Update

//   const updateTodo = async () => {
//     await updateDoc(doc(db, "todos", todo.id), {
//       completed: !todo.completed,
//     });
//   };

//   // Delete

//   const deleteTodo = async (id: string) => {
//     await deleteDoc(doc(db, "todos", id));
//   };

//   return (
//     <div className="Todo">
//       <Switch
//         edge="end"
//         checked={todo.completed}
//         onChange={updateTodo}
//         inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
//       />
//       <p>{todo.text}</p>
//       <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)}>
//         <DeleteIcon fontSize="large" />
//       </IconButton>
//     </div>
//   );
// }
// export default Todo;

export {}