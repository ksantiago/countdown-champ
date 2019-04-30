import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>Countdown to December 25, 2019</h1>
        <div className="clock-days">14 Days</div>
        <div className="clock-hours">20 Hours</div>
        <div className="clock-minutes">40 Minutes</div>
        <div className="clock-seconds">17 Minutes</div>

        <div>
          <input placeholder="new date" />
          <button>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;
