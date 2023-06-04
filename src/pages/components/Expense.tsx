import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../../firebase";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";

function Expense(props: any) {
  const { expense } = props;

  // Update (TODO: make this work)

  const updateExpense = async () => {
    await updateDoc(doc(db, "expenses", expense.id), {
    //   name: expense.name,
    //   store: expense.store,
    //   cost: expense.cost,
    //   date: expense.date,
    });
  };

  // Delete

  const deleteExpense = async (id: string) => {
    await deleteDoc(doc(db, "expenses", id));
  };

  return (
    <div className="Expense">
      <p>name: {expense.name}</p>
      <p>store: {expense.store}</p>
      <p>cost: ${expense.cost}</p>
      {/* TODO: properly format this date, maybe ref https://shahabyazdi.github.io/react-date-object/ */}
      <p>date: {expense.date.toString()}</p>
      <IconButton aria-label="delete" onClick={() => deleteExpense(expense.id)}>
        <DeleteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
export default Expense;
