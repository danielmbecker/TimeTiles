import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const ref = collection(firestore, "login");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email: emailRef.current.value,
      pass: passRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">email</label>
        <input type="text" ref={emailRef} />
        <label htmlFor="">pass</label>
        <input type="text" ref={passRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
