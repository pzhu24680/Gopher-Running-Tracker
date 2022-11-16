import React, { useState, useEffect } from "react";
import NavigationBar from "./navigationBar"
const Mainpage = () => {
  const [entryList, setEntryList] = useState([]);
  const pollAPI = (status) => {
    fetch("https://pzruntracker.herokuapp.com/logs/")
      .then((response) => response.json())
      .then((data) => {
        setEntryList(data);
      });
  };
  useEffect(() => {
    pollAPI("initialize");
  }, []);

  return (
    <div>
      <NavigationBar entryList={entryList}></NavigationBar>
    </div>
  );
};

export default Mainpage;
