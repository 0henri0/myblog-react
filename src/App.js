import React, { Component } from 'react';
import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore();
console.log(store);
class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
