import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { auth, db } from "../firebase";
import { logout } from "../authentication/AuthFunctions";
import { query, collection, getDocs, where } from "firebase/firestore";

function Home() {
  const [user, loading, error] = useAuthState(auth);
//   const [name, setName] = useState("");
  const navigate = useNavigate();
//   const fetchUserName = async () => {
//     try {
//       const q = query(collection(db, "users"), where("uid", "==", user?.uid));
//       const doc = await getDocs(q);
//       const data = doc.docs[0].data();
//       setName(data.name);
//     } catch (err) {
//       console.error(err);
//       alert("An error occured while fetching user data");
//     }
//   };
//   useEffect(() => {
//     if (loading) return;
//     if (!user) return navigate("/home");
//     fetchUserName();
//   }, [user, loading]);

  return (
    <div className="home">
      <div className="home__container">
        {/* Logged in as
        <div>{name}</div>
        <div>{user?.email}</div> */}
        <button className="home__btn" onClick={() => logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
