import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VehicleDetail from './VehicleDetail'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        list: [
          "Go to the store",
          "Wash the dishes",
          "Learn some code"
        ]
      }
    }

  render() {
    return (
      <div>
        <VehicleDetail list = {this.state.list} />
      </div>

    );
  }

}

export default App;
