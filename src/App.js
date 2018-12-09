import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { AppState } from './AppState';
import { Header } from './components/Header';
import { MainView } from './components/MainView';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.appState = new AppState();
  }

  render() {
    return (
      <Provider appState={this.appState}>
        <div className="App">
          <Header title="Dashboard" />
          <MainView />
        </div>
      </Provider>
    );
  }
}

export default App;
