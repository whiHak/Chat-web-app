import React, { useContext, useEffect, useState } from "react";
import profile from "../images/profile.jpg";
import { AuthContext } from "../context/AuthContext";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const Chats = () => {
  const currentUser = useContext(AuthContext);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChat = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());

        return () => {
          unsub();
        };
      });
    };
    currentUser.uid && getChat();
  }, [currentUser.uid]);

  console.log(Object.entries(chats));
  return (
    <div className="chats">
      {Object.entries(chats)?.map((chats) => {
        return (
          <div className="userInfo" key={chats[0]}>
            <img src={chats[1].userInfo.photoURL} alt="" />
            <div className="chatsInfo">
              <span>{chats[1].userInfo.name}</span>
              <p>{chats[1].userInfo.lastMessages?.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
