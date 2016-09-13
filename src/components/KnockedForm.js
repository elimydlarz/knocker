import React, { Component } from 'react';
import FlashMessage from './FlashMessage';
import TextInput from './TextInput';
import Submit from './Submit';
import DropDown from './DropDown';
import Login from './Login';
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
      message: `Thanks heaps for knocking at ${this.state.knocked.knockeeAddress}.
                You're a great knocker, ${this.state.knocked.knocker}!`,
      knocked: { knocker: this.state.knocked.knocker },
      authorised: true,
    });
  }

  handleSubmitFailure(response) {
    const message = response.status === 401
      ? `We're having trouble authenticating you.
        Make sure you've identified yourself correctly and
        supplied the right password.`
      : 'Whoops! Something unexpected has gone wrong.'
    this.setState({
      message ,
      authorised: false,
    });
  }

  render() {
    return (
      <div className='KnockedForm'>
        <FlashMessage
          message={this.state.message} />
        <form>
          <Login
            user={this.state.knocked.knocker || ''}
            password={this.state.password}
            userHandler={this.updateField}
            passwordHandler={this.setPassword}
            authorised={this.state.authorised}
          />
          <TextInput
            name='knockeeAddress'
            label='Where did you knock?'
            value={this.state.knocked.knockeeAddress || ''}
            changeHandler={this.updateField}
          />
          <TextInput
            name='knockeePerson'
            label='Who did you speak to? (optional)'
            value={this.state.knocked.knockeePerson || ''}
            changeHandler={this.updateField}
          />
          <DropDown
            name='interaction'
            value={this.state.knocked.interaction}
            changeHandler={this.updateField}
            placeholder='What happened?'
            options={[
              'We had a non-meaningful interaction',
              'We had a meaningful interaction',
              'They were busy',
            	'There was a language barrier',
            	'There was no answer',
            	'I received bad information',
            	'The property was inaccessible',
            	'They refused to talk to me',
            ]}
          />
          <DropDown
            name='support'
            value={this.state.knocked.support}
            changeHandler={this.updateField}
            placeholder='What was their level of support? (optional)'
            options={[
            	'Strong',
            	'Weak',
            	'Undecided',
            	'Weakly opposed',
            	'Strongly opposed',
              'Unknown',
            ]}
          />
          <textarea name='issues'
            placeholder={`What issues did they care about? (optional)
e.g. health, jobs, climate change`}
            value={this.state.knocked.issues || ''}
            onChange={this.updateField}
          />
          <textarea name='notes'
            placeholder='Anything else? (optional)'
            value={this.state.knocked.notes || ''}
            onChange={this.updateField}
          />
          <DropDown
            name='followupRequired'
            value={this.state.knocked.followupRequired}
            changeHandler={this.updateField}
            placeholder='Should we have a followup conversation? (optional)'
            options={[
              'Yeah',
              'Nope',
            ]}
          />
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
            failureFn={this.handleSubmitFailure}
          />
        </form>
      </div>
    );
  }
}
