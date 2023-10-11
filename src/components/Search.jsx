import React, { useContext, useEffect, useState } from "react";
import profile from "../images/profile.jpg";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export const Search = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [err, setErr] = useState(false);

  const currentUser = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("name", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handelSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const respose = await getDoc(doc(db, "chats", combinedId));

      if (!respose.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            name: user.name,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            name: currentUser.name,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {}
    setUser(null)
    setUsername("")
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
          value={username}
        />
      </div>
      {err && <span>user not found</span>}
      {user && (
        <div className="userInfo" onClick={handelSelect}>
          <img src={user.photoURL} alt="" />
          <div className="chatInfo">
            <span>{user.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};
