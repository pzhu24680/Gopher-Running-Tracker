import React, { useState, useEffect } from "react";
import AddEntry from "./addEntry";
import DeleteEntry from "./deleteEntry";
import EditEntry from "./editEntry";
import Search from "./search";
import SortButton from "./SortButton";
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
  const handleSort=(type)=>{
    let sorted=[...entryList]
    if(type==="miles"){
        sorted.sort((entry1,entry2)=>{
            if(entry1.miles<entry2.miles)return 1;
            else if(entry1.miles==entry2.miles)return 0;
            return -1;
        })
    }
    if(type==="date"){
        sorted.sort((entry1,entry2)=>{
            let date1=new Date(entry1.date)
            let date2=new Date(entry2.date)
            if(date1<date2)return 1
            else if(date1===date2) return 0
            return -1
        })
    }
    setEntryList(sorted)
}
  useEffect(() => {
    pollAPI("initialize");
  }, []);

  return (
    <div>
      <div className="search-box">
        <SortButton handleSort={handleSort}/>
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
