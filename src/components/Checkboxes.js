import React, { Component } from 'react';
import '../css/Checkboxes.css';

export default class Checkboxes extends Component {
  render() { return (
    <div className='Checkboxes'>
      <label>
        <div className='checkbox-heading'>
          {this.props.label}
        </div>
        {this.props.options.map(option =>
          <label className='checkbox-label' key={option}>
            <input name={this.props.name} type='checkbox'
              value={option}
              checked={this.props.checkedOptions.includes(option)}
              onClick={this.props.changeHandler} />
            {option}
          </label>
        )}
      </label>
    </div>
  ); }
}
