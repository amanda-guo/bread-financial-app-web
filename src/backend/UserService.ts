import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "../firebase";

// Read all users

const fetchUsers = async () => {
  const usersCollection = await getDocs(collection(db, "users"));
  usersCollection.forEach((doc) => {
    console.log(
      `${doc.id} => 
      name: ${doc.data().name}, 
      email: ${doc.data().email}`
    );
  });
};

// Read one user

const fetchOneUser = async (userId: string) => {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  console.log("User data:", userSnap.data());
};

// Update

// Delete

export {fetchUsers, fetchOneUser};