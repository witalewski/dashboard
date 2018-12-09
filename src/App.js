import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { AppState } from './AppState';
import { Greeter } from './Greeter';

class App extends Component {
  constructor() {
    super();
    this.appState = new AppState();
  }

  render() {
    return (
      <div className="App">
        <Provider appState={this.appState}>
          <Greeter />
        </Provider>
      </div>
    );
  }
}

export default App;
