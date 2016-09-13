import React, { Component } from 'react';
import FlashMessage from './FlashMessage';
import RadioButtons from './RadioButtons';
import Checkboxes from './Checkboxes';
import TextInput from './TextInput';
import Submit from './Submit';
import '../css/KnockedForm.css';

export default class KnockedForm extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome to Knocker!',
      knocked: {},
      password: '',
    };

    this.setPassword = this.setPassword.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateCheckedOptions = this.updateCheckedOptions.bind(this);
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
    this.handleSubmitFailure = this.handleSubmitFailure.bind(this);
  }

  setPassword(event) {
    this.setState({ password: event.target.value });
  }

  updateField(event) {
    this.setState({
      knocked: {
        ...this.state.knocked,
        [event.target.name]: event.target.value,
      },
    });
  }

  updateCheckedOptions(event) {
    const add = (list, value) => (list || []).concat(value);
    const remove = (list, value) => list.filter(option => option !== value);

    this.setState({
      knocked: {
        ...this.state.knocked,
        [event.target.name]: event.target.checked
          ? add(this.state.knocked[event.target.name], event.target.value)
          : remove(this.state.knocked[event.target.name], event.target.value)
      }
    })
  }

  handleSubmitSuccess() {
    this.setState({
      message: `Thanks heaps for knocking at ${this.state.knocked.knockeeAddress}`,
      knocked: { knocker: this.state.knocked.knocker },
    });
  }

  handleSubmitFailure(response) {
    console.log(response);
    const message = response.status === 401
      ? `We're having trouble authenticating you.
        Make sure you've identified yourself correctly and
        supplied the right password.`
      : 'Whoops! Something unexpected has gone wrong.'
    this.setState({ message });
  }

  render() {
    return (
      <div className='KnockedForm'>
        <FlashMessage
          message={this.state.message} />
        <form>
          <TextInput
            name='knocker'
            label='Who knocked?'
            value={this.state.knocked.knocker || ''}
            changeHandler={this.updateField} />
          <label>
            {"What's the password?"}
            <input type='password' name='password'
              value={this.state.password}
              onChange={this.setPassword} />
          </label>
          <TextInput
            name='knockeeAddress'
            label='Where did you knock?'
            value={this.state.knocked.knockeeAddress || ''}
            changeHandler={this.updateField} />
          <TextInput
            name='knockeePerson'
            label='Who did you speak to?'
            value={this.state.knocked.knockeePerson || ''}
            changeHandler={this.updateField} />
          <RadioButtons
            name='interaction'
            value={this.state.knocked.interaction}
            changeHandler={this.updateField}
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
            changeHandler={this.updateField}
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
          <Checkboxes
            name='issues'
            checkedOptions={this.state.knocked.issues || []}
            changeHandler={this.updateCheckedOptions}
            label='What issues did they care about?'
            options={[
              'Jobs',
              'Cost of living',
              'Economy',
              'Education ',
              'Health',
	            'Climate change',
              'Environment',
              'Refugees',
              'Other',
            ]}
          />
          <RadioButtons
            name='followupRequired'
            value={this.state.knocked.followupRequired}
            changeHandler={this.updateField}
            label='Should we have a followup conversation?'
            options={[
              'Yeah',
              'Nope',
            ]}
          />
          <label>
            Anything else?
            <textarea name='notes'
              value={this.state.knocked.notes || ''}
              onChange={this.updateField} />
          </label>
          <Submit
            password={this.state.password}
            data={this.state.knocked}
            requiredFields={[
              this.state.knocked.knocker,
              this.state.password,
              this.state.knocked.knockeeAddress,
              this.state.knocked.interaction,
            ]}
            successFn={this.handleSubmitSuccess}
            failureFn={this.handleSubmitFailure} />
        </form>
      </div>
    );
  }
}
