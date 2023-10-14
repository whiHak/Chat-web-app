import React, { useContext, useEffect } from "react";
import profile from "../images/profile.jpg";
import { signOut, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";

export const Navbar = () => {
  const currentUser = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profilePic = e.target.files[0];

    const storageRef = ref(storage, uuid());
    const uploadTask = uploadBytesResumable(storageRef, profilePic);

    uploadTask.on(
      (error) => {
        //Handle error
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          });
        } catch (error) {
          //Handle error
        }
      }
    );
  };

  return (
    <div className="navbar">
      <span className="logo">My Chats</span>
      <div className="user">
        <form onChange={handleSubmit}>
          <input type="file" id="profile" style={{ display: "none" }} />
          <label htmlFor="profile">
            <img src={currentUser.photoURL} alt="" />
          </label>
        </form>

        <span className="name">{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};
