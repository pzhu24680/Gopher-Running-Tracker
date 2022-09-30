import React, {useState, useEffect} from 'react';
import AddEntry from './addEntry';
import DeleteEntry from './deleteEntry';
import EditEntry from './editEntry';
import Search from './search';
const Mainpage = () => {
    const [entryList, setEntryList] = useState([]);
    const pollAPI=()=>{
        fetch('https://pzruntracker.herokuapp.com/logs/')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setEntryList(data);
            console.log(entryList);
        });
    }
    useEffect(() => {
        pollAPI();
    }, []);

    
    return (
        <div>
            <div className="search-box">
                <AddEntry onClick={pollAPI}/>
                <Search id={entryList}/>
            </div>
            <div className = "entryList">
                {entryList.map((entry) => (
                    <div className="dayEntry">
                        <div className="miles-ran">Miles Ran: {entry.miles}</div>
                        <div className="average-pace">Pace: {entry.avgPace}</div>
                        <div className="time">Date: {entry.date}</div>
                        <div className="additional-notes">Additional Notes: {entry.additionalNotes}</div>
                        <EditEntry id={entry} onClick={pollAPI} />
                        <DeleteEntry id={entry.id} onClick={pollAPI}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mainpage;
