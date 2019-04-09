import React, { Component } from 'react';
import './App.css';
import TRMView from './trm/TRMView'
import VehicleList from './parking/VehicleList'
import Wrap from './parking/Wrap'
import VehicleParking from './parking/VehicleParking'
import {  CardDeck } from 'reactstrap';
import * as Constant from './Constant';
import ReactNotification from 'react-notifications-component';
import "react-notifications-component/dist/theme.css";


class App extends Component {

  constructor(props) {
    super(props);
    this.addNotification = this.addNotification.bind(this);
    this.notificationDOMRef = React.createRef();
  }

  addNotification(msg, type) {
    this.notificationDOMRef.current.addNotification({
      title: "Happy Parking",
      message: msg,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 5000 },
      dismissable: { click: true }
    });
  }

  render() {
    return (
        <div>
          <TRMView />
          <VehicleParking  noti = {this.addNotification}/>
          <br/>
          <Wrap noti = {this.addNotification} />
          <br/>
          <CardDeck>
            <VehicleList title = "Cars that are parking" url = {Constant.PARKINGRESTURL_RESOURCECAR} columnLabel = "Car Id"/>
            <VehicleList title = "Motorcycles that are parking" url = {Constant.PARKINGRESTURL_RESOURCEMOTORCYCLE} columnLabel = "Motorcycle Id"/>
          </CardDeck>
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
      );
  }

}

export default App;
