import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Divider, Stack } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddExpense() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [store, setStore] = useState("");
  const [cost, setCost] = useState(0);
  const [date, setDate] = useState(new Date());
  // TODO: add category_id from categories, somehow get the data from the db to populate a dropdown list and then have it added

  // Create

  // TODO: same as the Category todos

  const addExpense = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (name === "") {
      alert("Please enter a valid expense name.");
      return;
    }
    if (store === "") {
      alert("Please enter a valid store.");
      return;
    }
    if (cost < 0) {
      alert("Please enter a valid cost.");
      return;
    }
    if (date > new Date()) {
      alert("Please enter a valid date.");
      return;
    }
    console.log("name: " + name);
    console.log("store: " + store);
    console.log("cost: " + cost);
    console.log("date: " + date);
    await addDoc(collection(db, "expenses"), {
      name: name,
      store: store,
      cost: cost,
      date: date,
    });
    setName("");
    setStore("");
    setCost(0);
    setDate(new Date());
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  const routeChange = () => {
    let path = `/home`;
    navigate(path);
  };

  return (
    <>
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
        maxWidth="50%"
      >
        <button onClick={routeChange}>Home</button>
        <form>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            value={store}
            onChange={(e) => setStore(e.target.value)}
            label="Store"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            label="Cost"
            variant="outlined"
          />
          <DatePicker
            selected={date}
            onChange={(date: Date) => setDate(date!)}
          />
          <button onClick={addExpense}>Add Expense</button>
        </form>
      </Stack>
    </>
  );
}
export default AddExpense;
