import React, { useState } from "react";
const AddEntry = ({ addEntry }) => {
  const [add, setAdd] = useState(false);
  const [miles, setMiles] = useState("");
  const [avgPace, setAvgPace] = useState("");
  const [date, setDate] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const DropDown = () => {
    return (
      <div className="form">
        <div className="inputMiles">
          <label>Miles</label>
          <input
            type="text"
            placeholder="Ex: 0.00"
            value={miles}
            onChange={(e) => setMiles(e.target.value)}
          />
        </div>
        <div className="inputPace">
          <label>Pace</label>
          <input
            type="text"
            placeholder="Ex: hh:mm:ss"
            value={avgPace}
            onChange={(e) => setAvgPace(e.target.value)}
          ></input>
        </div>
        <div className="inputDate">
          <label>Date</label>
          <input
            type="text"
            placeholder="Ex: yyyy-mm-dd"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <div className="inputNotes">
          <label>Additional Notes</label>
          <input
            type="text"
            placeholder="Ex: text..."
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          ></input>
        </div>
        <button onClick={() => clickEvent()}>submit</button>
      </div>
    );
  };

  const clickEvent = () => {
    post();
    setAdd(!add);
    addEntry({
        id: 0,
        miles: miles,
        avgPace: avgPace,
        date: date,
        additionalNotes: additionalNotes,
      })
  };

  const post = () => {
    const data = {
      id: 0,
      miles: miles,
      avgPace: avgPace,
      date: date,
      additionalNotes: additionalNotes,
    };
    fetch("https://pzruntracker.herokuapp.com/logs/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="addEntries">
      {add ? (
        DropDown()
      ) : (
        <button className="addButton" onClick={() => setAdd(!add)}>
          Add
        </button>
      )}
    </div>
  );
};

export default AddEntry;
