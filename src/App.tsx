import React from 'react';
import './App.css';
import useResize from './hooks/useResize';

function App() {
  const { isMobile, screen } = useResize();

  return (
    <div className="App">
      {
        screen.orientation > 1 ? 'Wide' : 'Portrait'
      }
      {isMobile ? <h5>{screen.width}</h5> : <h1>{screen.width}</h1>}
    </div>
  );
}

export default App;
