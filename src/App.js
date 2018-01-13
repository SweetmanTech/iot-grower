import React, { Component } from 'react';
import './App.css';
import Toolbar  from './Components/Toolbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <p className="App-intro">
          Welcome to IoT-Grower! We are working to grow free food for all humanity
        </p>
      </div>
    );
  }
}

export default App;
