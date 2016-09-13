import React, { Component } from 'react';
import FlashMessage from './FlashMessage';
import transmit from '../services/transmit.js';
import RadioButtons from './RadioButtons';
import TextInput from './TextInput';
import '../css/KnockedForm.css';

export default class KnockedForm extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome to Knocker!',
      knocked: {},
    };

    this.updateState = this.updateState.bind(this);
    this.transmit = this.transmit.bind(this);
  }

  updateState(event) {
    this.setState({
      knocked: {
        ...this.state.knocked,
        [event.target.name]: event.target.value ,
      },
    });
  }

  transmit(event) {
    event.preventDefault();

    transmit('knocked', this.state.knocked, response => {
      if (response.status === 201) {
        this.setState({
          message: `Thanks heaps for knocking at ${this.state.knocked.address}`,
          knocked: { knocker: this.state.knocked.knocker },
        });
      } else {
        this.setState({ message: 'Whoops!' });
      }
    });
  }

  render() {
    return (
      <div className="KnockedForm">
        <FlashMessage
          message={this.state.message} />
        <form>
          <TextInput
            label='Who knocked?'
            value={this.state.knocked.knocker || ''}
            changeHandler={this.updateState} />
          <TextInput
            label='Where did you knock?'
            value={this.state.knocked.address || ''}
            changeHandler={this.updateState} />
          <TextInput
            label='Who did you speak to?'
            value={this.state.knocked.knockee || ''}
            changeHandler={this.updateState} />
          <RadioButtons
            name='interaction'
            value={this.state.knocked.interaction}
            changeHandler={this.updateState}
            label='What happened?'
            options={[
              'Non-meaningful interaction',
              'Meaningful interaction',
              'Busy',
            	'Language Barrier',
            	'No Answer',
            	'Bad Info',
            	'Inaccessible',
            	'Refused',
            ]}
          />
          <RadioButtons
            name='support'
            value={this.state.knocked.support}
            changeHandler={this.updateState}
            label='What was their level of support?'
            options={[
              'Unknown',
            	'Strong support',
            	'Weak support',
            	'Undecided',
            	'Weak oppose',
            	'Strong oppose',
            ]}
          />
          <label>
            Anything else?
            <textarea name="notes"
              value={this.state.knocked.notes || ''}
              onChange={this.updateState} />
          </label>
          <input type="submit"
            disabled={
              !this.state.knocked.knocker ||
              !this.state.knocked.address ||
              !this.state.knocked.interaction
            }
            onClick={this.transmit} />
        </form>
      </div>
    );
  }
}
