import React, { Component } from 'react';
import * as Constant from '../Constant';
import VehicleDetail from './VehicleDetail';

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
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="plate" type="text" onChange={this.handleChange} />
        </label>
        <label>
          Pick your vehicle type:
          <select name="vehicleType" onChange={this.handleChange}>
          {Constant.TYPES.map(item => (
            <option key={item}>
              {item}
            </option>
          ))}
          </select>
        </label>
        <label>
          cc:
          <input name="cc" type="text" onChange={this.handleChange} />
        </label>
        <label>
          Pick your action:
          <select name="action" onChange={this.handleChange}>
          {Constant.ACTIONS.map(item => (
            <option key={item}>
              {item}
            </option>
          ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <VehicleDetail vehicle = {this.state.vehicle} />
      </div>
    );
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.action);
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
                this.handleToUpdate(result.content)
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
          }else{
            this.handleToUpdate(null)
          }
        });
  }



}

export default VehicleParking
