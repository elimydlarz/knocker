import React, { Component } from 'react';
import '../css/TextInput.css';

export default class TextInput extends Component {
  render() {
    return (
      <div className='TextInput'>
        <label>
          {this.props.label}
          <input type="text" name={this.props.name}
            value={this.props.value}
            onChange={this.props.changeHandler} />
        </label>
      </div>
    );
  }
}
