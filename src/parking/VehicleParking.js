import React, { Component } from 'react';
import * as Constant from '../Constant';
import VehicleDetail from './VehicleDetail';
import { Button, Input, Label, Form, Card, CardHeader, CardBody, CardDeck } from 'reactstrap';

class VehicleParking extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      plate: '',
      cc: '',
      vehicleType: Constant.TYPES[0],
      action: Constant.ACTIONS[0],
      vehicle:null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToUpdate = (someArg) => {
      this.setState({
          vehicle: someArg
      });
  }


  render() {
    var style = this.state.vehicleType === 'Moto' &&  this.state.action !== 'GetOut'? {}:{display:'none'};
    return (
      <CardDeck>
        <Card>
          <CardHeader tag="h3">Parking</CardHeader>
          <CardBody>
             <Form onSubmit={this.handleSubmit}>
                 <Label for="plate">Plate:</Label>
                 <Input name="plate" id="parking_plate" onChange={this.handleChange} placeholder="Insert a plate" />
                 <Label for="vehicleType">Vehicle Type:</Label>
                 <Input name="vehicleType" type="select" id="parking_vehicleType" onChange={this.handleChange}>
                    {Constant.TYPES.map(item => (
                    <option key={item}>
                      {item}
                    </option>
                    ))}
                </Input>
                <Label for="cc" style={style}>CC:</Label>
                <Input name="cc" id="parking_cc" onChange={this.handleChange} placeholder="Insert a CC" style={style}/>
                <Label for="action">Pick your action:</Label>
                <Input name="action" type="select" id="parking_action" onChange={this.handleChange}>
                  {Constant.ACTIONS.map(item => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
               </Input>
               <br/>
               <Button id="parking_submit" style={{float: 'right'}} color="primary">Submit</Button>
             </Form>
          </CardBody>
        </Card>
        <VehicleDetail vehicle = {this.state.vehicle} />
      </CardDeck>
    );
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    var json = null;
    if(this.state.action === 'GetIn'){
      if (this.state.vehicleType === 'Carro') {
        json = JSON.stringify(
          {
            plate: this.state.plate
          });
        this.fetchQuotes(Constant.PARKINGRESTURL_RESOURCECAR, 'POST', json);
      }else if (this.state.vehicleType === 'Moto') {
        json = JSON.stringify(
          {
            plate: this.state.plate,
            cc:this.state.cc
          });
        this.fetchQuotes(Constant.PARKINGRESTURL_RESOURCEMOTORCYCLE, 'POST', json);
      }
    }else if (this.state.action === 'GetOut') {
      if (this.state.vehicleType === 'Carro') {
        json = JSON.stringify(
          {
            plate: this.state.plate
          });
        this.fetchQuotes(Constant.PARKINGRESTURL_RESOURCECAR, 'PUT', json);
      }else if (this.state.vehicleType === 'Moto') {
        json = JSON.stringify(
          {
            plate: this.state.plate
          });
        this.fetchQuotes(Constant.PARKINGRESTURL_RESOURCEMOTORCYCLE, 'PUT', json);
      }
    }


    event.preventDefault();
  }

  fetchQuotes = (url, method, json) => {
    fetch(url,
      {
        method: method,
        headers:
        {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: json
        }).then(res => {
          if(res.status === 201 || res.status === 200){
            res.json().then(
              (result) => {
                var msg = this.state.action + " : " +this.state.vehicleType + " : " +this.state.plate;
                this.props.noti(msg, Constant.TYPE_NOTIFICATION_SUCCESS);
                this.handleToUpdate(result.content)
              }
            )
          }else{
            res.json().then(
              (result) => {
                var msg = result.content;
                this.props.noti(msg, Constant.TYPE_NOTIFICATION_WARNING);
              }
            );
            this.handleToUpdate(null)
          }
        }).catch(err => {this.props.noti('Service is not avalible at the moment', Constant.TYPE_NOTIFICATION_DANGER);});
  }



}

export default VehicleParking
