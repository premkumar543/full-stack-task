import React, { useState, useEffect } from 'react';
import Player from './components/Player';
import OverlayManager from './components/OverlayManager';
import API from './api';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [overlays, setOverlays] = useState([]);

  const fetchOverlays = async () => {
    const res = await API.get('/overlay');
    setOverlays(res.data);
  };

  useEffect(() => { fetchOverlays(); }, []);

  return (
    <div className="App">
      <h1>🎥 Livestream App with Overlays</h1>
      <input
        type="text"
        placeholder="Enter RTSP/HTTP video URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Player url={url} overlays={overlays} />
      <OverlayManager refreshOverlays={fetchOverlays} />
    </div>
  );
}

export default App;
