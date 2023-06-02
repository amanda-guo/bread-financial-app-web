import React from "react";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../../firebase";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";

function Category(props: any) {
  const { category } = props;

  // Update

  const updateCategory = async () => {
    await updateDoc(doc(db, "category", category.id), {
    //   completed: !todo.completed,
    });
  };

  // Delete

  const deleteCategory = async (id: string) => {
    await deleteDoc(doc(db, "category", id));
  };

  return (

    {/* TODO: fix this !!!! */}
    // <div className="Todo">
    //   <Switch
    //     edge="end"
    //     checked={todo.completed}
    //     onChange={updateTodo}
    //     inputProps={{ "aria-labelledby": "switch-list-label-bluetooth" }}
    //   />
    //   <p>{todo.text}</p>
    //   <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)}>
    //     <DeleteIcon fontSize="large" />
    //   </IconButton>
    // </div>
  );
}
export default Category;