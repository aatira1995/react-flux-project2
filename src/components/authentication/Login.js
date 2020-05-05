import React from 'react';
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';
import { browserHistory as history} from 'react-router';

class LoginPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onTextChange = this.onTextChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.login = this.login.bind(this);
    }

    onTextChange(e) {
        this.setState({
            username : e.target.value
        });
    }

    onPasswordChange(e) {
        this.setState({
            password : e.target.value
        });
    }

    login(){
        if(this.state.username === 'admin' && this.state.password === 'admin') {
            alert('Login');
            this.setState({
                username: '',
                password: ''
            });
            history.push(
                '/users'
            );
        } else {
            this.setState({
                username: '',
                password: ''
            });
            alert('Username or password is invalid');
        }
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1 className="text-center" style={{color: '#6E7AD3'}}>Login</h1>
                <TextInput
                name="Username"
                label="Username"
                value={this.state.username}
                onChange={this.onTextChange}
                errors="" />
                <PasswordInput 
                name="Password"
                label="Password"
                value={this.state.password}
                onChange={this.onPasswordChange}
                errors=""/>
                <button className="btn-primary text-center" onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default LoginPage;

// var React = require('react');
// var TextInput = require('../common/TextInput');
// var PasswordInput = require('../common/PasswordInput');

// var LoginPage = React.createClass( {
//     onTextChange: function(e) {
//         // this.setState({
//         //     username = e.target.value
//         // })
//         // console.log(this.state.username)
//     },

//     onPasswordChange: function(e) {
//         // this.setState({
//         //     password = e.target.value
//         // })
//         // console.log(this.state.password)
//     },

//     render: function() {
//         return(
//             <div className="col-md-6 col-md-offset-3">
//                 <h1 className="text-center" style={{color: '#6E7AD3'}}>Login</h1>
//                 <TextInput
//                 name="Username"
//                 label="Username"
//                // value={this.state.username}
//                 onChange={this.onTextChange}
//                 errors="" />
//                 <PasswordInput 
//                 name="Password"
//                 label="Password"
//                 //value={this.state.password}
//                 onChange={this.onPasswordChange}
//                 errors=""/>
//                 <button className="btn-primary text-center">Login</button>
//             </div>
//         );
//     }
// }) 

// module.exports = LoginPage;