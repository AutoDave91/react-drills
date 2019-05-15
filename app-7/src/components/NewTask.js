import React, {Component} from 'react'

class NewTask extends Component {
    constructor(){
        super()
        this.state = {
            input: ''
        }
        this.updateTodo = this.updateTodo.bind(this);
    }
    
    updateInputText(x){
        this.setState({input: x})
    }
    updateTodo(){
        this.props.add(this.state.input);
        this.setState({input: ''});
    } 

    render(){
        return(
            <main>
                <input value={this.state.input} placeholder='Enter new task' onChange={(e)=> this.updateInputText(e.target.value)} />
                <button onClick={this.updateTodo}>Add</button>
            </main>
        )
    }
}

export default NewTask