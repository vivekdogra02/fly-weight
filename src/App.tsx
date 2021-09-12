import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Rocket } from './features/rocket-launch/Rocket';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="rocket-container">
        <Rocket />

        </div>
    </div>
  );
}

export default App;
