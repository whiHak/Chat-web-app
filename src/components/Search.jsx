import React, { useEffect, useState } from "react";
import profile from "../images/profile.jpg";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const Search = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [err, setErr] = useState(false);
  
  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("name", "==", username));
    
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (error) {
      setErr(true);
    }
  };
  
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  return (
    <div className="search">
      <div className="form">
        <input
          type="text"
          placeholder="Find a User"
          onKeyDown={handleKey}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      {err && <span>user not found</span>}
      {user && <div className="userInfo">
        <img src={user.photoURL} alt="" />
        <div className="chatInfo">
          <span>{user.name}</span>
        </div>
      </div>}
    </div>
  );
};
