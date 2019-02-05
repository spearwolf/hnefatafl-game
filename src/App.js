import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux-store/configureStore';

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

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">
          <header className="App-header">

            <HnefataflBoard rows={11} cols={11} tiles={tiles} tileSize={64} />

          </header>
        </div>

      </Provider>
    );
  }
}
export default App;
