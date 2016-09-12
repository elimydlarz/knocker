import React, { Component } from 'react';
import '../node_modules/skeleton-css/css/normalize.css';
import '../node_modules/skeleton-css/css/skeleton.css';
import './App.css';

import Knocked from './components/Knocked'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Knocker</h1>
        <Knocked />
      </div>
    );
  }
}
