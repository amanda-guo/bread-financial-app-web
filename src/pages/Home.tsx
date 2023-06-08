import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";
import { auth, db } from "../firebase";
import { logout } from "../authentication/AuthFunctions";
import { query, collection, getDocs, where, onSnapshot } from "firebase/firestore";
import { fetchOneUser, fetchUsers } from "../backend/UserService";

function Home() {
  const [user, loading, error] = useAuthState(auth);
  // const [name, setName] = useState("");
  // const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();

  // TODO: figure out how to get one user from the db and display their info

  // const fetchUserName = async () => {
  //   try {
  //      const q = query(collection(db, "users"));
  //      const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //        let usersArr: any[] = [];
  //        querySnapshot.forEach((doc) => {
  //          usersArr.push({ ...doc.data(), id: doc.id });
  //        });
  //        setUsers(usersArr);
  //        usersArr.forEach((u) => {
  //         console.log("user: " + u.name);
  //        });
  //      });
  //      return () => unsubscribe();
      // const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      // const doc = await getDocs(q);
      // const data = doc.docs[0].data();
      // setName(data.name);
  //   } catch (err: any) {
  //     console.error(err);
  //     alert("An error occured while fetching user data");
  //   }
  // };

  useEffect(() => {
    if (user) {
      console.log("user here info: " + user);
    }
    if (loading) {
      console.log("here");
      return;
    }
    if (!user) return navigate("/");
    // fetchUserName();
  }, [user, loading]);

  const routeChange = (path: string) => {
    navigate(path);
  };

  return (
    <div className="home">
      <div className="home__container">
        {/* Logged in as
        <div>{name}</div>
        <div>{user?.email}</div> */}
        <button className="home__btn" onClick={logout}>
          Logout
        </button>
      </div>
      <button onClick={() => routeChange(`/addcategory`)}>Add Category</button>
      <button onClick={() => routeChange(`/addexpense`)}>Add Expense</button>
      <button onClick={fetchUsers}>All Users Info</button>
      <button onClick={() => fetchOneUser("zHuVfrWhJMPErPwe56qK")}>
        Current User Info
      </button>
    </div>
  );
}

export default Home;
