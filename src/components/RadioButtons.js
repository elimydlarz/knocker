import React, { Component } from 'react';
import '../css/RadioButtons.css';

export default class Knocked extends Component {
  render() {
    return (
      <div className='RadioButtons'>
        <label>
          <div className="radio-heading">
            {this.props.label}
          </div>
          {this.props.options.map(option =>
            <label className="radio-label">
              <input type='radio' checked={false} />
              {option}
            </label>
          )}
        </label>
      </div>
    );
  }
}
