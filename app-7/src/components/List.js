import React, {Component} from 'react'
import Todo from './Todo';

class List extends Component {
    render(){
        let list = this.props.tasks.map((e, i)=> {
            return <Todo key={i} task={e} />;
        })
        return <main>
            {list}
        </main>
    }
}

export default List