import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        };

        this.Login = this.Login.bind(this);
    }
    
    onChangeName(e){
        this.setState({username: e})
    }
    onChangePassword(e){
        this.setState({password: e})
    }
    Login(){
          alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    
    render(){
        return(
            <main>
                <input className='username' type='text' onChange={(e)=> this.onChangeName(e.target.value)}></input>
                <input className='password' type='text' onChange={(e)=> this.onChangePassword(e.target.value)}></input>
                <button onClick={(e)=> this.Login()}>Login</button>
            </main>
        )
    }
}

export default Login