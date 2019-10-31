import React from 'react';
import './App.css';
import Profile from './components/profile/Profile';

function App() {
  const hobbylist = ["sleep, ", "gaming, ", "eat"];
  return (
    <div className="App">
      <Profile img="http://placeimg.com/640/480/any" name="firstName lastName" email="me@firstName.me" />
    </div>
  );
}

export default App;
