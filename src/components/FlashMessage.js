import React, { Component } from 'react';
import '../css/FlashMessage.css';

export default class FlashMessage extends Component {
  render() {
    return (
      <div className="FlashMessage">
        {this.props.message}
      </div>
    );
  }
}
