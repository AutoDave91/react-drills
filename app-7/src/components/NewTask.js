import React, {Components} from 'react'

updateInputText(x){
    this.setState({input: x})
}

<input value={this.state.input} placeholder='Enter new task' onChange={(e)=> this.updateInputText(e.target.value)} />
<button onClick={this.updateTodo}>Add</button>

export default NewTask