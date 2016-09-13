import React, { Component } from 'react';
import TextInput from './TextInput';
import '../css/Login.css';

export default class Login extends Component {
  render() {
    if (!this.props.authorised) {
      return (
        <div className='Login'>
          <TextInput
            name='knocker'
            label="Who's knocking?"
            value={this.props.user}
            changeHandler={this.props.userHandler}
          />
          <input type='password' name='password'
            placeholder="What's your password?"
            value={this.props.password}
            onChange={this.props.passwordHandler}
          />
        </div>
      );
    }
  }
}
