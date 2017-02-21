/* eslint-disable import/no-named-as-default */

import React, { Component } from 'react';
import TicTacToe from './TicTacToe';

class App extends Component {
  render () {
    return (
      <div className="App">
        <TicTacToe />
      </div>
    );
  }
}

export default App;
