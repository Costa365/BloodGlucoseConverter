import React, { Component } from 'react';
import './App.css';
import '../Conv/Conv';
import Conv from '../Conv/Conv';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Blood Glucose Converter
        </header>
        <div><Conv /></div>
        <footer className="App-footer">
          Made with React.js v{React.version}
        </footer>
      </div>
    );
  }
}

export default App;
