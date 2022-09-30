import './App.css';
import React, { useState } from 'react';

function App() {
  const [averageMiles, setAverageMiles] = useState(null);
  const [averagePace, setAveragePace] = useState(null);

  const [entryList, setEntryList] = useState(null);
  useEffect(() => {
      fetch('https://pzruntracker.herokuapp.com/logs/')
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
          setEntryList(data);
      });
      
  }, []);

  

  return (
    <div className="App">
      <main>
        <title className="title">All Time Statistics</title>
            <div className="infoBox">
                <h1 className="header">Average Miles Ran</h1>
                <p className='stat'>12 miles</p>
            </div>
            <div className='infoBox'>
                <h2 className='header'>Average Pace</h2>
                <p className='stat'>3:22:33</p>
            </div>
      </main>
    </div>
  );
}

export default App;
