import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isReady, setReady] = useState(false);
  const [Avatar, setAvatar] = useState("");
  const [Name, setName] = useState("");
  const [DC, setDC] = useState("");
  const [currentJob, setCurrentJob] = useState("");

  useEffect(() => {
    fetch("https://xivapi.com/character/20315482")
    .then(response => response.json())
    .then(data => {
      setReady(true);
      setAvatar(data.Character.Avatar)
      setName(data.Character.Name)
      setDC(data.Character.DC);
      setCurrentJob(data.Character.ActiveClassJob.UnlockedState.Name)
    })
    .catch(err => console.log(err))
  }, [])

  if (!isReady)
    return <div className="loading">Loading character...</div>

  return (
    <div className="App">
      <div className='Character'>
        <img className='Avatar' src={Avatar} alt="Character pic" />
        <h2>{Name}</h2>
        <p>Data Center: {DC}</p>
        <p>Current Job: {currentJob}</p>
      </div>
    </div>
  );
}

export default App;