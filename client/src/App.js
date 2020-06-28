import React from 'react';
import './App.css';
import Pokemon from "./components/Pokemon"

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Pokemon in App.JS</h1>
        <Pokemon/>
      </header>
    </div>
  );
}

export default App;
