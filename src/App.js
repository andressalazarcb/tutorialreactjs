import React, { Component } from 'react';
import './App.css';
import TRMView from './trm/TRMView'
import CarList from './parkingcar/CarList'
import MotorcycleList from './parkingmotorcycle/MotorcycleList'
import Wrap from './parking/Wrap'
import VehicleParking from './parking/VehicleParking'
import {  CardDeck } from 'reactstrap';


class App extends Component {

  constructor(props) {
      super(props);
    }

  render() {
    return (
        <div>
          <TRMView />
          <CardDeck>
            <CarList />
            <MotorcycleList />
          </CardDeck>

          <Wrap />
          <VehicleParking />
        </div>
      );
  }

}

export default App;
