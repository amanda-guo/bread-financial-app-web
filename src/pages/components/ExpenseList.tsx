import React, { useState, useEffect } from "react";
import Expense from "./Expense";
import Divider from "@mui/material/Divider";
import { db } from "../../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

function ExpenseList() {
  const [expenses, setExpenses] = useState<any[]>([]);

  // Read

  useEffect(() => {
    const q = query(collection(db, "expenses"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let expensesArr: any[] = [];
      querySnapshot.forEach((doc) => {
        expensesArr.push({ ...doc.data(), id: doc.id });
      });
      setExpenses(expensesArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {expenses.map((expense: any, i: number) => (
        <React.Fragment key={expense.id}>
          <Expense expense={expense} />
          {i < expenses.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  );
}
export default ExpenseList;
