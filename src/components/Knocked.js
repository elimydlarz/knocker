import React, { Component } from 'react';
import FlashMessage from './FlashMessage';
import transmit from '../services/transmit.js';
import '../css/Knocked.css';

const EMPTY_KNOCKEE = {
  address: '',
  notes: '',
};

export default class Knocked extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome to Knocker!',
      knockee: EMPTY_KNOCKEE,
    };

    this.updateKnockee = this.updateKnockee.bind(this);
    this.transmit = this.transmit.bind(this);
  }

  updateKnockee(event) {
    this.setState({
      knockee: {
        ...this.state.knockee,
        [event.target.id]: event.target.value ,
      },
    });
  }

  transmit(event) {
    event.preventDefault();

    transmit('knocked', this.state.knockee, response => {
      if (response.status === 201) {
        this.setState({
          message: `Thanks heaps for knocking at ${this.state.knockee.address}`,
          knockee: EMPTY_KNOCKEE,
        });
      } else {
        this.setState({ message: 'Whoops!' });
      }
    });
  }

  render() {
    return (
      <div className="Knocked">
        <FlashMessage message={this.state.message}/>
        <form>
          <label data-name="address-label">
            Where did you knock?
            <input type="text" id="address" value={this.state.knockee.address}
              onChange={this.updateKnockee} />
          </label>
          <label data-name="notes-label">
            What happened?
            <textarea id="notes" value={this.state.knockee.notes}
              onChange={this.updateKnockee} />
          </label>
          <input type="submit" disabled={!this.state.knockee.address || !this.state.knockee.notes}
            onClick={this.transmit} />
        </form>
      </div>
    );
  }
}
