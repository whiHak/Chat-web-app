import React, { useContext, useState } from "react";
import Add from "../images/Add.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid"

export const Register = () => {
  const [err, setErr] = useState(false);
  const [errMess, setErrMess] = useState("");
  const[URL, setURL] = useState("")

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const pwd = e.target[2].value;
    const file = e.target[3].files[0];

    setErr(false);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, pwd);

      const storageRef = ref(storage, name);
      console.log(storageRef)
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref) 
            setURL(downloadURL);
          } catch (error) {
            //Handel error
          }
        }
        );
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: URL,
        });
        await setDoc(doc(db, "users", response.user.uid), {
          uid: response.user.uid,
          name,
          email,
          photoURL: URL,
        });
        await setDoc(doc(db, "userChats", response.user.uid), {});
        navigate("/"); 
    } catch (error) {
      setErrMess(error.message);
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form onSubmit={handelSubmit}>
          <span className="mainTitle">My Chats</span>
          <span className="pageTitle">Register</span>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="avatar" />
          <label htmlFor="avatar">
            <img src={Add} alt="add avatar icon" />
            <span>Add an avatar</span>
          </label>
          {err && (
            <span style={{ color: "red", fontSize: "12px" }}>{errMess}</span>
          )}
          <button>Sign Up</button>
          <p>
            You have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};
