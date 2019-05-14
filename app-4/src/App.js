import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <Login />
      </main>
    );
  }
}

export default App;
