import React, { Component } from 'react';
import '../css/Submit.css';
import EventStore from '../services/EventStore.js';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.transmit = this.transmit.bind(this);
  }

  transmit(event) {
    event.preventDefault();

    const auth = {
      user: this.props.user,
      password: this.props.password
    }

    EventStore.transmit(auth, this.props.eventType, this.props.data, response => {
      const responseHandler = response.status === 201
        ? this.props.successFn
        : this.props.failureFn;

      responseHandler(response);
    });
  }

  valid() {
    return this.props.requiredFields.every(field => field && field.length > 0)
  }

  render() { return (
    <div className='Submit'>
      <input type="submit"
        disabled={!this.valid()}
        onClick={this.transmit} />
    </div>
  ); }
}
