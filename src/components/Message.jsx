import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const currentUser = useContext(AuthContext);
  const data = useContext(ChatContext);

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="mInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.data.user.photoURL
          }
          alt="profilePic"
        />
        <span>just now</span>
      </div>
      <div className="mContent">
        <span>{message.text}</span>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
