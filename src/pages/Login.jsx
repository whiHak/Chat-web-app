import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const Login = () => {
  
  const [err, setErr] = useState(false);
  const [errMess, setErrMess] = useState("");
  
  const navigate = useNavigate()

  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const pwd = e.target[1].value;
    
    setErr(false)
    try {
      await signInWithEmailAndPassword(auth, email, pwd);
      navigate('/')
      
    } catch (error) {
      setErrMess(error.message)
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <form onSubmit={handelSubmit}>
          <span className="mainTitle">My Chats</span>
          <span className="pageTitle">Login</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {err && <span style={{color: "red", fontSize: "12px"}}>{errMess}</span>}
          <button>Sign in</button>
          <p>
            You don't have an account? <Link to="/register">Register</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};
