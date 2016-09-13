import React, { Component } from 'react';
import '../css/TextInput.css';

export default class TextInput extends Component {
  render() {
    return (
      <div className='TextInput'>
        <input type="text" name={this.props.name}
          value={this.props.value}
          placeholder={this.props.label}
          onChange={this.props.changeHandler} />
      </div>
    );
  }
}
