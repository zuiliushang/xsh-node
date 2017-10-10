import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello/Hello';
import Heros from './components/Heros/Heros';

const HEROS = [
    {name: 'raindrops',age: 12},
    {name: 'rotos',age: 12},
    {name: 'zero',age: 12},
    {name: 'char',age: 12}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello/>
        <hr/>
        <Heros HEROS={HEROS}/>
      </div>
    );
  }
}

export default App;
