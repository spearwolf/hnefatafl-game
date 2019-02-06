import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';

import HnefataflBoard from './components/HnefataflBoard/HnefataflBoardContainer';

import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">
          <header className="App-header">

            <HnefataflBoard />

          </header>
        </div>

      </Provider>
    );
  }
}
export default App;
