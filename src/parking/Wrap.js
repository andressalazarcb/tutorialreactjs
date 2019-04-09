import React, { Component } from 'react';
import VehicleFind from './VehicleFind';
import VehicleDetail from './VehicleDetail';
import {  CardDeck } from 'reactstrap';


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
      <CardDeck>
        <VehicleFind handleToUpdate = {this.handleToUpdate} noti = {this.props.noti} />
        <VehicleDetail vehicle = {this.state.vehicle} />
      </CardDeck>
    );
  }

}

export default Wrap
