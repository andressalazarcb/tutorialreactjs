import React, { Component } from 'react';


class VehicleDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }


  render() {
    if(this.props.vehicle != null){

      var price = this.props.vehicle.parkingOrders.map(order => {
          if(order.active && order.price != null){
            return order.price
          }
          return 0;
        }).reduce(function(sum, elem){return sum + elem;});

      var ingreso = this.props.vehicle.parkingOrders.map(order => {
          return order.startDate;
        }).reduce(function(sum, elem){
          if(elem > sum){
            return elem;
          }
          return sum;});

          var order = this.props.vehicle.parkingOrders.filter(function(elem){
    return elem.startDate === ingreso;
});

      return (

          <div>
            <div>Placa</div>
            <div>{this.props.vehicle.plate}</div>
            <div>Tipo</div>
            <div>{this.props.vehicle.type}</div>
            <div>Valor a pagar:</div>
            <div>{price}</div>
            <div>Ingreso</div>
            <div>{new Date(order[0].startDate).toUTCString()}</div>
            <div>Salida</div>
            <div>{order[0].endDate === null ? 'Aun no ha salido':new Date(order[0].endDate).toUTCString()}</div>
          </div>

      );
    }
    return (<div>No se encontró el vehiculo</div>);
  }

}

export default VehicleDetail
