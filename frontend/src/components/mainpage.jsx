import React, { useState, useEffect } from "react";
import AddEntry from "./addEntry";
import DeleteEntry from "./deleteEntry";
import EditEntry from "./editEntry";
import Search from "./search";
const Mainpage = () => {
  const [entryList, setEntryList] = useState([]);
  //   const isEntryListsEqual=(arr1,arr2)=>{
  //     if(arr1.length!==arr2.length){
  //         return false;
  //     }
  //     for(let i=0;i<arr1.length;i++){
  //         if(JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])){
  //             return false;
  //         }
  //     }
  //     return true;
  //   }
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
        <Search id={entryList} />
      </div>
      <div className="entryList">
        {entryList.map((entry) => (
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
