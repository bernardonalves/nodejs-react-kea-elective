import React from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';
import FOAAS from './components/FOAAS';

function App() {
  return (
    <div className="App">
      <TrafficLight myData="something" />
      <FOAAS/>
    </div>
  );
}

export default App;
