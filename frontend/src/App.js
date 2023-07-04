import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import SignUp from "./conponents/Signup";
import jwt_decode from "jwt-decode";
import SignIn from "./conponents/Signin";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState({});

  const onChange = (e) => {
    console.log("Search Clicked");
  };

  const SearchBar = ({ keyword, onChange }) => {};

  const handleCallbackResponse = (response) => {
    console.log("JWT Encoded ID Token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signindiv").hidden = true;
  };

  const handleSignOut = (event) => {
    setUser({});
    document.getElementById("signindiv").hidden = true;
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "640754232014-kcvb7kgppvdq3ln760ga0tbv6u9q1b6h.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signindiv"), {
      theme: "outline",
      size: "large ",
    });
    google.accounts.id.prompt();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <SignIn /> */}
      <div id="signindiv"></div>
      {Object.keys(user).length != 0 && (
        <button onClick={(e) => handleSignOut(e)}></button>
      )}
    </div>
  );
}

export default App;
