import React, {Component} from 'react';

class Todo extends Component{
    render(){
        return (
            <main>
                <p>{this.props.task}</p>
            </main>
        )
    }
}

export default Todo