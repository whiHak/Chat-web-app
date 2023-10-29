import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";

export const Chats = () => {
  const currentUser = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
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

  const handleSelect = (u) => {
    dispatch({
      type: "CHANGE_USER",
      payload: u,
    });
  };


  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => {
        const userInfo = chat[1]?.userInfo;
        const lastMessage = chat[1]?.lastMessage?.text;

        if (userInfo) {
          return (
            <div
              className="userInfo"
              key={chat[0]}
              onClick={() => handleSelect(userInfo)}
            >
              <img src={userInfo?.photoURL} alt="" />
              <div className="chatsInfo">
                <span>{userInfo.name}</span>
                <p>{lastMessage}</p>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};
