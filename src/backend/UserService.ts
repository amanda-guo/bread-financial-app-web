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

// const fetchOneUser = async (userId: string) => {
//   const userRef = doc(db, "users", userId);
//   const userSnap = await getDoc(userRef);
//   if (userSnap.exists()) {
//     console.log("User data:", userSnap.data());
//   } else {
//     console.log("User data doesn't exist.");
//   }
// };

const fetchOneUser = async () => {
  const user = auth.currentUser;
  if (user !== null) {
    const name = user.displayName; // why is this null or is there a way to get the firebase ID and pass it over here?
    const email = user.email;
    console.log(
      `name: ${name}, 
      email: ${email}`
    );
  }
};

// Update

// Delete

export {fetchUsers, fetchOneUser};