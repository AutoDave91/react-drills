import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewTask from './components/NewTask'
import List from './components/List'

//Question #7
// Create an app similiar to question #6,
// except this time add a new third component called NewTask.
// NewTask should be responsible for adding a new task to a task
// array on the App component. Also add a new fourth component called
// List. List should be responsible for display the tasks inside of
// a task array on the App component in a list-like fashion.

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: []
    }
    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo(task){
    this.setState({list: [...this.state.list, task]})
  } 
  
  render() {
    return (
      <main className="App">
        <h1>Your to-do list:</h1>
        <NewTask add={this.updateTodo} />
        <List tasks={this.state.list} />
      </main>
    );
  }
}

export default App;