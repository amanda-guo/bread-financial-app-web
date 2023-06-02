import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import CategoryList from "./components/CategoryList";
import { Divider, Stack } from "@mui/material";

function AddCategory() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [colour, setColour] = useState("red");
  const [spendingLimit, setSpendingLimit] = useState(0);

  // Create

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
    await addDoc(collection(db, "categories"), {
      name: name,
      colour: colour,
      spendingLimit: spendingLimit,
    });
    setName("");
    setColour("red");
    setSpendingLimit(0);
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
      maxWidth="50%">
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
        <CategoryList />
      </Stack>
    </>
  );
}
export default AddCategory;
