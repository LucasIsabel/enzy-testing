import React, { Component } from 'react';
import './App.css';
import Items from './components/items';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Items name="Lucas" />
      </div>
    );
  }
}

export default App;
