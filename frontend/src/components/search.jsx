import React, { useState } from "react";
const Search = ({ handleSearch }) => {
  const [query, setQuery] = useState('');
  return (
    <div className="search-bar-holder">
      <input
        type="text"
        className="search-bar"
        placeholder="search date"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button className="search" onClick={() =>{
        handleSearch(query)
      }}>
        Search
      </button>
      <button className="search" onClick={()=>{
        handleSearch('')
        setQuery('')
      }}>
        Clear
      </button>
    </div>
  );
};
 
export default Search;
 

 
 

