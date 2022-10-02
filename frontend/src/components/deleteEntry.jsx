import React from "react";
const DeleteEntry = ({ id, removeEntry }) => {
  const delEntry = () => {
    fetch(`https://pzruntracker.herokuapp.com/logs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => console.log("success"));
  };

  const clickEvent = () => {
    delEntry();
    removeEntry(id);
  };

  return (
    <div className="deleteEntry">
      <button className="deleteButton" id={id} onClick={clickEvent}>
        Delete Entry
      </button>
    </div>
  );
};

export default DeleteEntry;
