import React, { useState } from "react";
const EditEntry = ({ id, onClick }) => {
  const [editE, setEditE] = useState(false);
  const [miles, setMiles] = useState(id.miles);
  const [avgPace, setAvgPace] = useState(id.avgPace);
  const [date, setDate] = useState(id.date);
  const [additionalNotes, setAdditionalNotes] = useState(id.additionalNotes);

  const edit = () => {
    const data = {
      miles: miles,
      avgPace: avgPace,
      date: date,
      additionalNotes: additionalNotes,
    };
    fetch(`https://pzruntracker.herokuapp.com/logs/${id.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const DropDown = () => {
    return (
      <div className="form">
        <label>Miles</label>
        <input
          type="text"
          placeholder="Ex: 0.00"
          value={miles}
          onChange={(e) => setMiles(e.target.value)}
        />
        <label>Pace</label>
        <input
          type="text"
          placeholder="Ex: hh:mm:ss"
          value={avgPace}
          onChange={(e) => setAvgPace(e.target.value)}
        ></input>
        <label>Date</label>
        <input
          type="text"
          placeholder="Ex: yyyy-mm-dd"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <label>Additional Notes</label>
        <input
          type="text"
          placeholder="Ex: text..."
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
        ></input>
        <button onClick={() => clickEvent()}>submit</button>
      </div>
    );
  };

  const clickEvent = () => {
    edit();
    onClick();
    setEditE(!editE);
  };

  return (
    <div className="editEntry">
      {editE ? (
        DropDown()
      ) : (
        <button className="editButton" onClick={() => setEditE(!editE)}>
          Edit Entry
        </button>
      )}
    </div>
  );
};

export default EditEntry;
