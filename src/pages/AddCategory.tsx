import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AddCategory() {
  const [name, setName] = useState("");
  const [colour, setColour] = useState("red");
  const [spendingLimit, setSpendingLimit] = useState(0);

  // Create a category

  // TODO: refactor this to be more succinct (ref: https://claritydev.net/blog/typescript-typing-form-events-in-react and https://react.dev/reference/react/useState)
  // TODO: add the ability to add expenses to this

  const createCategory = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (name === "") {
      alert("Please enter a valid category name.");
      return;
    }
    if (colour === "") {
      alert("Please enter a valid category colour.");
      return;
    }
    if (spendingLimit < 0) {
      alert("Please enter a valid spending limit.");
      return;
    }
    console.log("name: " + name);
    console.log("colour: " + colour);
    console.log("spending limit: " + spendingLimit);
    await addDoc(collection(db, "category"), {
      name: name,
      colour: colour,
      spendingLimit: spendingLimit,
    });
    setName("");
    setColour("red");
    setSpendingLimit(0);
  };

  return (
    <form>
      <TextField
        style={{ width: "100%" }}
        id="outlined-basic"
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        variant="outlined"
      />
      <label>
        Pick your category colour:
        <select value={colour} onChange={(e) => setColour(e.target.value)}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>
      </label>
      <TextField
        style={{ width: "100%" }}
        type="number"
        id="outlined-basic"
        value={spendingLimit}
        onChange={(e) => setSpendingLimit(Number(e.target.value))}
        label="Spending Limit"
        variant="outlined"
      />
      <button onClick={createCategory}>Create Category</button>
    </form>
  );
}
export default AddCategory;
