import React, { Component } from 'react';
import '../node_modules/skeleton-css/css/normalize.css';
import '../node_modules/skeleton-css/css/skeleton.css';
import './App.css';

import FlashMessage from './components/FlashMessage'
import LoginForm from './components/LoginForm';
import KnockedForm from './components/KnockedForm'

export default class App extends Component {
  constructor() {
    super();
    this.state = { message: "So, tell me a bit about yourself..." };

    this.updateUser = this.updateUser.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.updateAuthorised = this.updateAuthorised.bind(this);
  }

  updateUser(event) {
    this.setState({ user: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  updateMessage(message) {
    this.setState({ message });
  }

  updateAuthorised(authorised) {
    this.setState({ authorised });
  }

  render() { return (
    <div className="App">
      <h1>Knocker</h1>
      <FlashMessage
        message={this.state.message}
      />
      {!this.state.authorised ? (
        <LoginForm
          user={this.state.user || ''}
          password={this.state.password || ''}
          userHandler={this.updateUser}
          passwordHandler={this.updatePassword}
          updateMessage={this.updateMessage}
          updateAuthorised={this.updateAuthorised}
        />
      ) : undefined}
      {this.state.authorised ? (
        <KnockedForm
          user={this.state.user}
          password={this.state.password}
          updateMessage={this.updateMessage}
        />
      ) : undefined}
    </div>
  ); }
}
