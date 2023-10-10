import React, { useState } from "react";
import Add from "../images/Add.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const pwd = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(auth, email, pwd);
      console.log(response.user);

      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        async () => {
          try {
            const snapshot = await getDownloadURL(uploadTask.snapshot.ref);
            const downloadURL = snapshot;

            await updateProfile(response.user, {
              name,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              name,
              email,
              photoURL: downloadURL,
            });
            // await setDoc(doc(db, "userChats", {}));
            navigate("/");
          } catch (error) {
            console.error(error);
            setErr(true);
          }
        }
      );
    } catch (error) {
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
          {err && <span>something went wrong</span>}
          <button>Sign Up</button>
          <p>You have an account? Login </p>
        </form>
      </div>
    </div>
  );
};
