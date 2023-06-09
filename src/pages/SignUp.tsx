import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  signUpWithEmailAndPassword,
  signInWithGoogle,
} from "../authentication/AuthFunctions";
import "./styles/SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const signUp = () => {
    if (!name) alert("Please enter name");
    signUpWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading]);
  return (
    <div className="signUp">
      <div className="signUp__container">
        <input
          type="text"
          className="signUp__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="signUp__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="signUp__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="signUp__btn" onClick={signUp}>
          Sign Up
        </button>
        <button
          className="signUp__btn signUp__google"
          onClick={signInWithGoogle}
        >
          Sign Up with Google
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default SignUp;
