import React, { Component } from 'react';
import * as Constant from '../Constant'

class VehicleFind extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      plate: '',
      vehicleType: Constant.TYPES[0]
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  render() {
    return (
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
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.vehicleType === 'Carro') {
      this.fetchQuotes(Constant.PARKINGRESTURL_RESOURCECAR, this.state.plate)
    }else if (this.state.vehicleType === 'Moto') {
      this.fetchQuotes(Constant.PARKINGRESTURL_RESOURCEMOTORCYCLE, this.state.plate)
    }
    event.preventDefault();
  }

  fetchQuotes = (url, plate) => {
    fetch(url+plate)
    .then(res => {
      if(res.status === 200){
        res.json().then(
          (result) => {
            this.props.handleToUpdate(result.content)
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }else{
        this.props.handleToUpdate(null)
      }
    });
  }

}

export default VehicleFind
