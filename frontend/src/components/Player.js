import React from 'react';
import ReactPlayer from 'react-player';

export default function Player({ url, overlays }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <ReactPlayer url={url} playing controls width="640px" height="360px" />
      {overlays.map((o, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: `${o.y}px`,
          left: `${o.x}px`,
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: '#fff',
          padding: '4px 8px',
          borderRadius: '4px',
        }}>
          {o.text}
        </div>
      ))}
    </div>
  );
}
