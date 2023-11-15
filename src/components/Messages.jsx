import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

const Login = () => {
  const messageRef = useRef();

  const ref = collection(firestore, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      message: messageRef.current.value,
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
        <label htmlFor="">message</label>
        <input type="text" ref={messageRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
