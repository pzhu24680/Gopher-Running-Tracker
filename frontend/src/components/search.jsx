import React, { useState } from "react";
const Search = ({ id, onClick }) => {
  const [value, setValue] = useState("");
  const [inList, setInList] = useState(false);

  const FoundEntry = <div />;

  const checkEnter = (k) => {
    if (k === "Enter") {
      setValue("");
      findEntry();
    }
  };

  const findEntry = () => {
    id.map((entry) => {
      if (entry.date === value) {
        return (
          <div className="dayEntry">
            <div className="miles-ran">Miles Ran: {entry.miles}</div>
            <div className="average-pace">Pace: {entry.avgPace}</div>
            <div className="time">Date: {entry.date}</div>
            <div className="additional-notes">
              Additional Notes: {entry.additionalNotes}
            </div>
            <button onClick={setInList(false)}>Remove Search</button>
          </div>
        );
      }
    });
  };

  return (
    <div className="search-bar-holder">
      <input
        type="text"
        className="search-bar"
        placeholder="search date"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onKeyPress={checkEnter()}
      ></input>
      <button className="search" onClick={findEntry()}>
        Search
      </button>
    </div>
  );
};

export default Search;
