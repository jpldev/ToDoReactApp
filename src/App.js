import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemCard from './ItemCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Coderhouse</h1>
        </header>
        <p className="App-intro">
          <ItemCard title={"Hola"} description={"Chau"} />
        </p>
      </div>
    );
  }
}

export default App;
