import React from 'react';
import './App.css';
import Pokemon from "./components/Pokemon"

function App() {
  return (
    <div className="App">
        <header className="header">
            <h1>Pokemon Redux</h1>
        </header>            
        <Pokemon />
    </div>
  );
}

export default App;
