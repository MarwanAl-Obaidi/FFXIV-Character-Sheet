import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isReady, setReady] = useState(false);
  const [Avatar, setAvatar] = useState("");
  const [Name, setName] = useState("");
  const [DC, setDC] = useState("");

  useEffect(() => {
    fetch("https://xivapi.com/character/20315482")
    .then(response => response.json())
    .then(data => {
      setReady(true);
      setAvatar(data.Character.Avatar)
      setName(data.Character.Name)
      setDC(data.Character.DC);
    })
    .catch(err => console.log(err))
  }, [])

  if (!isReady)
    return <div className='loading'>Loading character...</div>

  return (
    <div className="App">
      <img src={Avatar} alt="Character pic" />
      <p>{Name}</p>
      <p>{DC}</p>
    </div>
  );
}

export default App;