import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from '/Users/David_Wayne/devmtn/afternoon-projects/react-drills/app-6/src/components/Todo';

class App extends Component {
  constructor(){
    super()
    this.state = {
      list: [],
      input: ''
    }
    this.updateTodo = this.updateTodo.bind(this);
}

updateInputText(x){
  this.setState({input: x})
}
updateTodo(){
  this.setState({list: [...this.state.list, this.state.input],
  input:''})
} 
  
render() {
  let list= this.state.list.map((e, i)=> {
    return <Todo key ={i} task ={e} />
  });
  return (
    <main className="App">
      <div className="adding">
        <h1>Your to-do list:</h1>
        <input value={this.state.input} placeholder='Enter new task' onChange={(e)=> this.updateInputText(e.target.value)} />
        <button onClick={this.updateTodo}>Add</button>
      </div>
      {list}
    </main>
  );
}
}

export default App;
//Question #7
// Create an app similiar to question #6,
// except this time add a new third component called NewTask.
// NewTask should be responsible for adding a new task to a task array
// on the App component. Also add a new fourth component called List.
// List should be responsible for display the tasks inside of a task
// array on the App component in a list-like fashion.