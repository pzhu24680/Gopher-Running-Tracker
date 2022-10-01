import React, {useState} from 'react';
const AddEntry = ({pollAPI}) => {
    const [add, setAdd] = useState(false);
    const [miles, setMiles] = useState("");
    const [avgPace, setAvgPace] = useState('');
    const [date, setDate] = useState('');
    const [additionalNotes, setAdditionalNotes] = useState('');


    const DropDown = () => {
        return (
            <div>
                <label>Miles</label>
                <input type='text' placeholder='Ex: 0.00' value={miles} onChange={e=>setMiles(e.target.value)}/>
                <label>Pace</label>
                <input type='text' placeholder='Ex: hh:mm:ss' value={avgPace} onChange={e=>setAvgPace(e.target.value)}></input>
                <label>Date</label>
                <input type='text' placeholder='Ex: yyyy-mm-dd' value={date} onChange={e=>setDate(e.target.value)}></input>
                <label>Additional Notes</label>
                <input type='text' placeholder='Ex: text...' value={additionalNotes} onChange={e=>setAdditionalNotes(e.target.value)}></input>
                <button onClick={()=>clickEvent()}>submit</button>
            </div>   
        );
    }

    const clickEvent = () => {
        post();
        pollAPI();
        setAdd(!add);
    }

    const post = () => {
        const data = {
            id: 0,
            miles: miles,
            avgPace: avgPace,
            date:date,
            additionalNotes: additionalNotes
        }
        fetch('https://pzruntracker.herokuapp.com/logs/', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='addEntries'>
            {
                add ? 
                DropDown() : <button onClick={() => setAdd(!add)}>Add Entry</button> 
            }
        </div>
    );
};

export default AddEntry;
