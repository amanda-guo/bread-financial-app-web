import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { sendPasswordReset } from "../authentication/AuthFunctions";
import "./styles/ResetPassword.css";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading]);

  return (
    <div className="resetPassword">
      <div className="resetPassword__container">
        <input
          type="text"
          className="resetPassword__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button className="resetPassword__btn" onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>

        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Reset;
