import React, { Component } from 'react';
import FlashMessage from './FlashMessage';
import transmit from '../services/transmit.js';
import '../css/Knocked.css';

export default class Knocked extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome to Knocker!',
      knocked: {
        knocker: '',
        address: '',
        notes: '',
      }
    };

    this.updateKnocked = this.updateKnocked.bind(this);
    this.transmit = this.transmit.bind(this);
  }

  updateKnocked(event) {
    this.setState({
      knocked: {
        ...this.state.knocked,
        [event.target.id]: event.target.value ,
      },
    });
  }

  transmit(event) {
    event.preventDefault();

    transmit('knocked', this.state.knocked, response => {
      if (response.status === 201) {
        this.setState({
          message: `Thanks heaps for knocking at ${this.state.knocked.address}`,
          knocked: {
            ...this.state.knocked,
            address: '',
            notes: '',
          },
        });
      } else {
        this.setState({ message: 'Whoops!' });
      }
    });
  }

  render() {
    return (
      <div className="Knocked">
        <FlashMessage 
          message={this.state.message} />
        <form>
          <label data-name="knocker-label">
            Who knocked?
            <input type="text" id="knocker"
              value={this.state.knocked.knocker}
              onChange={this.updateKnocked} />
          </label>
          <label data-name="address-label">
            Where did you knock?
            <input type="text" id="address"
              value={this.state.knocked.address}
              onChange={this.updateKnocked} />
          </label>
          <label data-name="notes-label">
            What happened?
            <textarea id="notes"
              value={this.state.knocked.notes}
              onChange={this.updateKnocked} />
          </label>
          <input type="submit"
            disabled={
              !this.state.knocked.knocker ||
              !this.state.knocked.address ||
              !this.state.knocked.notes
            }
            onClick={this.transmit} />
        </form>
      </div>
    );
  }
}
