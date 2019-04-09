import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Container, Row, Col } from 'reactstrap';

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

      var price = this.props.vehicle.parkingOrders.map(order =>
        {
          if(order.active && order.price != null){
            return order.price
          }
          return 0;
        }).reduce(function(sum, elem){return sum + elem;});

      var ingreso = this.props.vehicle.parkingOrders.map(order =>
        {
          return order.startDate;
        }).reduce(function(sum, elem){
          if(elem > sum){
            return elem;
          }
          return sum;});

      var order = this.props.vehicle.parkingOrders.filter(function(elem){return elem.startDate === ingreso;})[0];

      return (
        <Card>
          <CardHeader tag="h3">Vehicle Detail</CardHeader>
          <CardBody>
            <Container>
              <Row>
                <Col xs="6">Plate: </Col>
                <Col xs="6">{this.props.vehicle.plate}</Col>
              </Row>
              <Row>
                <Col xs="6">Type: </Col>
                <Col xs="6">{this.props.vehicle.type}</Col>
              </Row>
              <Row>
                <Col xs="6">Price: </Col>
                <Col xs="6">{new Intl.NumberFormat('co-CO', { style: 'currency', currency: 'COP' }).format(price)}</Col>
              </Row>
              <Row>
                <Col xs="6">Got In: </Col>
                <Col xs="6">{new Date(order.startDate).toLocaleString()}</Col>
              </Row>
              <Row>
                <Col xs="6">Got Out: </Col>
                <Col xs="6">{order.endDate === null ? 'Vehicle is still at parking lot':new Date(order.endDate).toLocaleString()}</Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      );
    }
    return (
      <div style={{width: '50%'}}>
      <Container>
        <Row>
          <Col><p className="text-info">No content vehicle</p></Col>
        </Row>
      </Container>
      </div>
    );
  }

}

export default VehicleDetail
