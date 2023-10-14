import React, { useState } from "react";
import Add from "../images/Add.png";
import { useEffect } from "react";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const Input = () => {
  const [text, setText] = useState("");
  const [img, setImage] = useState(null);
  const data = useContext(ChatContext);
  const currentUser = useContext(AuthContext);

  const handelSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          // Handle error
        },
        () => {
          try {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              updateDoc(doc(db, "chats", data.data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  img: downloadURL,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                }),
              });
            });
          } catch (error) {
            // Handle error
          }
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.data.chatId + ".lastMessage"]: {
        text,
      },
      [data.data.chatId + "date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.data.user.uid), {
      [data.data.chatId + ".lastMessage"]: {
        text,
      },
      [data.data.chatId + "date"]: serverTimestamp(),
    });
    setImage(null);
    setText("");
  };
  const handleKey = (e) => {
    e.code === "Enter" && handelSend();
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        onKeyDown={handleKey}
      />
      <div className="inputFiles">
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <label htmlFor="file">
          <img src={Add} alt="" />
        </label>
        <button onClick={handelSend}>Send</button>
      </div>
    </div>
  );
};
