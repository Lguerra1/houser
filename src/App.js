import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import route from './route'; 


class App extends Component {
  render() {
    return (
      <div className="App">{route}
      
      
      <Header />
        
      </div>
    );
  }
}

export default App;
