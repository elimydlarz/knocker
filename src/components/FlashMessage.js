import React, { Component } from 'react';

export default class FlashMessage extends Component {
  render() {
    return (
      <div className="FlashMessage">
        {this.props.message}
      </div>
    );
  }
}
