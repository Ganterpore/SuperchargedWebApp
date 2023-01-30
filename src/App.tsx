import React from 'react';
import symbolOrangeWhite from './images/symbolOrangeWhite.svg';
import { Quote } from './components/quote/Quote';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Supercharged Training
      </header>
      <body className="App-body">
        <img src={symbolOrangeWhite} className="App-logo" alt="logo" />
        <Quote/>
        <div className="App-spacer"></div>
        <button className="App-button Workout-button" onClick={() => console.log('Do Something')}>Start Workout</button>
      </body>
    </div>
  );
}

export default App;
