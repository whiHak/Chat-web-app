import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";
export const Messages = () => {
  const [message, setMessage] = useState();
  const data = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.data.chatId), (doc) => {
      doc.exists() && setMessage(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.data.chatId]);
  console.log(message);
  return (
    <div className="messages">
      {message?.map((m) => {
        return <Message message={m} key={m.id} />;
      })}
    </div>
  );
};
