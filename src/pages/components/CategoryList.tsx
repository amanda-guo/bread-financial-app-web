import React, { useState, useEffect } from "react";
import Category from "./Category";
import Divider from "@mui/material/Divider";
import { db } from "../../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

function CategoryList() {
  const [categories, setCategories] = useState<any[]>([]);

  // Read

  useEffect(() => {
    const q = query(collection(db, "categories"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let categoriesArr: any[] = [];
      querySnapshot.forEach((doc) => {
        categoriesArr.push({ ...doc.data(), id: doc.id });
      });
      setCategories(categoriesArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {categories.map((category: any, i: number) => (
        <React.Fragment key={category.id}>
          <Category category={category} />
          {i < categories.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  );
}
export default CategoryList;
