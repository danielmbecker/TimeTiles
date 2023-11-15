// Login.jsx
import React, { useEffect } from "react";
import { startFirebaseUI } from "../firebase";

const FirebaseUILogin = () => {
  useEffect(() => {
    // The ID of the div where the FirebaseUI widget will be inserted.
    startFirebaseUI("#firebaseui-auth-container");
  }, []);

  return (
    <div className="login">
      <h1>Login</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
};

export default FirebaseUILogin;
