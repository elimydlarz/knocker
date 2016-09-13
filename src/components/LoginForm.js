import React, { Component } from 'react';
import TextInput from './TextInput';
import Submit from './Submit';
import '../css/LoginForm.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.loginSuccess = this.loginSuccess.bind(this);
    this.loginFailure = this.loginFailure.bind(this);
  }

  loginSuccess() {
    this.props.updateMessage(`Welcome to Knocker, ${this.props.user}!`);
    this.props.updateAuthorised(true);
  }

  loginFailure(response) {
    const message = response.status === 401
      ? `We're having trouble authenticating you, ${this.props.user}.
        Make sure you've identified yourself correctly and
        supplied the right password.`
      : 'Whoops! Something unexpected has gone wrong.'

    this.props.updateMessage(message);
  }

  render() {
    return (
      <div className='Login'>
        <form>
          <TextInput
            name='user'
            label="Who's knocking?"
            value={this.props.user}
            changeHandler={this.props.userHandler}
          />
          <input type='password' name='password'
            placeholder="What's your password?"
            value={this.props.password}
            onChange={this.props.passwordHandler}
          />
          <Submit
            user={this.props.user}
            password={this.props.password}
            eventType='login'
            data={{ user: this.props.user }}
            requiredFields={[
              this.props.user,
              this.props.password,
            ]}
            successFn={this.loginSuccess}
            failureFn={this.loginFailure}
          />
        </form>
      </div>
    );
  }
}
