import React, { Component } from 'react';
import '../css/RadioButtons.css';

export default class TextInput extends Component {
  render() {
    return (
      <div className='TextInput'>
        <label>
          {this.props.label}
          <input type="text" name="knocker"
            value={this.props.value}
            onChange={this.props.changeHandler} />
        </label>
      </div>
    );
  }
}
