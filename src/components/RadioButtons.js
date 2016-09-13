import React, { Component } from 'react';
import '../css/RadioButtons.css';

export default class RadioButtons extends Component {
  render() {
    return (
      <div className='RadioButtons'>
        <label>
          <div className="radio-heading">
            {this.props.label}
          </div>
          {this.props.options.map(option =>
            <label key={option} className="radio-label">
              <input name={this.props.name} type='radio'
                value={option}
                checked={this.props.value === option}
                onClick={this.props.changeHandler} />
              {option}
            </label>
          )}
        </label>
      </div>
    );
  }
}
