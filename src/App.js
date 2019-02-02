import React, { Component } from 'react';

import HnefataflBoard from './HnefataflBoard/HnefataflBoard';

import './App.css';

const tiles = [
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0,
  0, 0, 0, 4, 4, 3, 4, 4, 0, 0, 0,
  0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <HnefataflBoard rows={11} cols={11} tiles={tiles} tileSize={64} />

        </header>
      </div>
    );
  }
}
export default App;
