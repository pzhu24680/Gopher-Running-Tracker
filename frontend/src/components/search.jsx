import React, { useState } from "react";
const Search = ({ id, onClick }) => {
 const [value, setValue] = useState("");
 const [search, setSearch] = useState(false);
 const [entry, setEntry] = useState({});
 
 const FindEntry = () => {
   if (search == true) {
     let foundEntry = {};
     let found = false;
     id.map((entry) => {
       console.log(entry.date + ", " + value);
       if (entry.date === value) {
         foundEntry = entry;
         found = true;
       }
     });
     if (found) {
       return (
         <div className="searchedEntry">
           <div className="miles-ran">Miles Ran: {foundEntry.miles}</div>
           <div className="average-pace">Pace: {foundEntry.avgPace}</div>
           <div className="time">Date: {foundEntry.date}</div>
           <div className="additional-notes">
             Additional Notes: {foundEntry.additionalNotes}
           </div>
           <div>
             <button className="exitSearch" onClick={() => setSearch(!search)}>
               Remove Search
             </button>
           </div>
         </div>
       );
     } else {
       return (
         <div>
           <div>Not Found</div>
           <button onClick={() => setSearch(!search)}>Return to Search</button>
         </div>
       );
     }
   }
 };
 
 return search ? (
   FindEntry()
 ) : (
   <div className="search-bar-holder">
     <input
       type="text"
       className="search-bar"
       placeholder="search date"
       onChange={(e) => setValue(e.target.value)}
       value={value}
     ></input>
     <button className="search" onClick={() => setSearch(!search)}>
       Search
     </button>
   </div>
 );
};
 
export default Search;
 
 
 

