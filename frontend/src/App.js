import React, { useState } from "react";
import Navbar from "./conponents/Navbar";
import SignUp from "./conponents/Signup";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    console.log("Search Clicked");
  };

  const SearchBar = ({ keyword, onChange }) => {};
  return (
    <div>
      <Navbar />
      <SignUp />

      {/* <button>login</button>
      <button>signup</button>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button onClick={() => onChange(searchInput)}>Search</button> */}
    </div>
  );
}

export default App;
