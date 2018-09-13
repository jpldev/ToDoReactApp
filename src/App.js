import React, { Component } from 'react';
import './App.css';
import ItemCard from './ItemCard';

class App extends Component {
  render() {
    const items = [{ title: "Hola", description: "HolaDesc" }, { title: "Chau", description: "ChauDesc" }];
    const listItems = items.map((item, index) =>
      <ItemCard key={index} title={item.title} description={item.description} />
    );
    return (
      <div>{listItems}</div>
    );
  }
}

export default App;
