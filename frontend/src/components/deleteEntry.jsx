import React from 'react';
const DeleteEntry = ({id,onClick}) => {

    const delEntry = () => {
        fetch(`https://pzruntracker.herokuapp.com/logs/${id}`, { method: 'DELETE',headers: {
            'Content-type': 'application/json'
        } },)
        .then(() => console.log('success'));
    }

    const clickEvent = () => {
        delEntry();
        onClick();
    }

    return (
        <div className='deleteEntry'>
            <button id={id} onClick={clickEvent}>Delete Entry</button>
        </div>
    );
};

export default DeleteEntry;
