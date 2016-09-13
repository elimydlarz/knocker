import React, { Component } from 'react';
import TextInput from './TextInput';
import Submit from './Submit';
import DropDown from './DropDown';
import '../css/KnockedForm.css';

export default class KnockedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome to Knocker!',
      knocked: { knocker: this.props.user },
    };

    this.updateField = this.updateField.bind(this);
    this.submitSuccess = this.submitSuccess.bind(this);
    this.submitFailure = this.submitFailure.bind(this);
  }

  updateField(event) {
    this.setState({
      knocked: {
        ...this.state.knocked,
        [event.target.name]: event.target.value,
      },
    });
  }

  submitSuccess() {
    this.props.updateMessage(`Thanks heaps for knocking at
      ${this.state.knocked.knockeeAddress}. You're a great knocker,
      ${this.props.user}!`);

    this.setState({ knocked: { knocker: this.props.user } });
  }

  submitFailure(response) {
    this.props.updateMessage('Whoops! Something unexpected has gone wrong.');
  }

  render() {
    return (
      <div className='KnockedForm'>
        <form>
          <TextInput
            name='knockeeAddress'
            label='Where did you knock?'
            value={this.state.knocked.knockeeAddress || ''}
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
          <TextInput
            name='knockeePerson'
            label='Who did you speak to?'
            value={this.state.knocked.knockeePerson || ''}
            changeHandler={this.updateField}
          />
          <DropDown
            name='support'
            value={this.state.knocked.support}
            changeHandler={this.updateField}
            placeholder='What was their level of support?'
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
            placeholder={'What issues did they care about?'}
            value={this.state.knocked.issues || ''}
            onChange={this.updateField}
          />
          <textarea name='notes'
            placeholder='Anything else?'
            value={this.state.knocked.notes || ''}
            onChange={this.updateField}
          />
          <DropDown
            name='followupRequired'
            value={this.state.knocked.followupRequired}
            changeHandler={this.updateField}
            placeholder='Should we have a followup conversation?'
            options={[
              'Yeah',
              'Nope',
            ]}
          />
          <Submit
            user={this.props.user}
            password={this.props.password}
            eventType='knocked'
            data={this.state.knocked}
            requiredFields={[
              this.state.knocked.knocker,
              this.state.knocked.knockeeAddress,
              this.state.knocked.interaction,
            ]}
            successFn={this.submitSuccess}
            failureFn={this.submitFailure}
          />
        </form>
      </div>
    );
  }
}
