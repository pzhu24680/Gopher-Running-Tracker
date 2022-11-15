import React, { useState, useEffect } from "react";
import AddEntry from "./addEntry";
import DeleteEntry from "./deleteEntry";
import EditEntry from "./editEntry";
import Search from "./search";
const Mainpage = () => {
  const [entryList, setEntryList] = useState([]);
  const [query,setQuery]=useState('')
  const pollAPI = (status) => {
    fetch("https://pzruntracker.herokuapp.com/logs/")
      .then((response) => response.json())
      .then((data) => {
        setEntryList(data);
      });
  };
  const removeEntry = (id) => {
    setEntryList(entryList.filter((item) => item.id !== id));
  };
  const handleSearch=(searchEntry)=>{
    setQuery(searchEntry)
  }
  const addEntry = (entry) => {
    setEntryList([...entryList, entry]);
  };
  const editEntry = (id, newEntry) => {
    let updatedEntryList = [...entryList];
    for (let i = 0; i < updatedEntryList.length; i++) {
      let entry = updatedEntryList[i];
      if (entry.id == id) {
        updatedEntryList[i] = newEntry;
      }
    }
    setEntryList(updatedEntryList);
  };
  useEffect(() => {
    pollAPI("initialize");
  }, []);

  return (
    <div>
      <div className="search-box">
        <AddEntry addEntry={addEntry} />
        <Search handleSearch={handleSearch}/>
      </div>
      <div className="entryList">
        {query==''?entryList.map((entry) => (
          <div className="dayEntry">
            <div className="miles-ran">Miles Ran: {entry.miles}</div>
            <div className="average-pace">Pace: {entry.avgPace}</div>
            <div className="time">Date: {entry.date}</div>
            <div className="additional-notes">
              Additional Notes: {entry.additionalNotes}
            </div>
            <EditEntry entry={entry} editEntry={editEntry} />
            <DeleteEntry id={entry.id} removeEntry={removeEntry} />
          </div>
        )):entryList.filter((entry)=>entry.date==query).map((entry) => (
          <div className="dayEntry">
            <div className="miles-ran">Miles Ran: {entry.miles}</div>
            <div className="average-pace">Pace: {entry.avgPace}</div>
            <div className="time">Date: {entry.date}</div>
            <div className="additional-notes">
              Additional Notes: {entry.additionalNotes}
            </div>
            <EditEntry entry={entry} editEntry={editEntry} />
            <DeleteEntry id={entry.id} removeEntry={removeEntry} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Mainpage;
