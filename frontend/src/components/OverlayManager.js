import React, { useState } from 'react';
import API from '../api';

export default function OverlayManager({ refreshOverlays }) {
  const [overlay, setOverlay] = useState({ name: '', text: '', x: 50, y: 50 });

  const handleAdd = async () => {
    await API.post('/overlay', overlay);
    refreshOverlays();
  };

  return (
    <div>
      <h3>Add Overlay</h3>
      <input placeholder="Name" onChange={(e) => setOverlay({ ...overlay, name: e.target.value })} />
      <input placeholder="Text" onChange={(e) => setOverlay({ ...overlay, text: e.target.value })} />
      <input type="number" placeholder="X" onChange={(e) => setOverlay({ ...overlay, x: e.target.value })} />
      <input type="number" placeholder="Y" onChange={(e) => setOverlay({ ...overlay, y: e.target.value })} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
