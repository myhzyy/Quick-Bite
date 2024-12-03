import React from "react";
import { useState } from "react";
import "../index.css";

function SearchBar() {
  const [type, setType] = useState("");
  const [submit, setSubmit] = useState([]);

  //   console.log(type);
  console.log(submit);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit([...submit, { title: type }]);
    setType("");
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search recipe here.."
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
