import React, { Component } from 'react';
import VehicleFind from './VehicleFind';
import VehicleDetail from './VehicleDetail';


class Wrap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      value: '',
      vehicle : null
    };
  }

  handleToUpdate = (someArg) => {
      this.setState({
          vehicle: someArg
      });
  }


  render() {
    return (
      <div>
        <VehicleFind handleToUpdate = {this.handleToUpdate} />
        <VehicleDetail vehicle = {this.state.vehicle} />
      </div>
    );
  }

}

export default Wrap
