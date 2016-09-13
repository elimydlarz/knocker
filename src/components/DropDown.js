import React, { Component } from 'react';
import '../css/DropDown.css';

export default class DropDown extends Component {
  render() {
    return (
      <div className='DropDown'>
        <select
          className={this.props.value ? 'filled' : 'unfilled'}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.changeHandler}
        >
          <option disabled={true} selected={true}>{this.props.placeholder}</option>
          {this.props.options.map(
            option =>
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
          )}
        </select>
      </div>
    );
  }
}
