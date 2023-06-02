import React from "react";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../../firebase";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";

function Category(props: any) {
  const { category } = props;

  // Update (TODO: make this work)

  const updateCategory = async () => {
    await updateDoc(doc(db, "categories", category.id), {
    //   name: category.name,
    //   colour: category.colour,
    //   spendingLimit: category.spendingLimit,
    });
  };

  // Delete

  const deleteCategory = async (id: string) => {
    await deleteDoc(doc(db, "categories", id));
  };

  return (
    <div className="Category">
      <p>name: {category.name}</p>
      <p>colour: {category.colour}</p>
      <p>spending limit: {category.spendingLimit}</p>
      <IconButton aria-label="delete" onClick={() => deleteCategory(category.id)}>
        <DeleteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
export default Category;