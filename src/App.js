import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import { Route } from 'react-router-dom';
import ListPinItems from './ListPinItems'
import Profile from './Profile'
import Following from './Following'


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/" component={ListPinItems} />
        <Route exact path="/following" component={Following} />
        <Route exact path="/profile" component={Profile} />
        {/* <Route
          path={'detail/:id'}
          render={(props) => <DetailPinItem id={props.id}
          /> */}
      </div>
  
      );
    }
  }
  
  export default App;
