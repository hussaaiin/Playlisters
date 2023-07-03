
import React, {useState} from "react";



function App() {

  const [searchInput, setSearchInput] = useState("");

  const onChange = (e) => {
    console.log("Search Clicked")
  }

  const SearchBar = ({ keyword, onChange }) => {
    }
  return (
    <div>
      <h1>Playlisters</h1>
      <button>login</button>
      <button>signup</button>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button onClick={() => onChange(searchInput)}>Search</button>
      
    </div>
  );
}

export default App;


  
