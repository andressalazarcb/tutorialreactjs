import React, { Component } from 'react';
import * as Constant from '../Constant';
import { Button, Input, Label, Form, Card, CardHeader, CardBody } from 'reactstrap';

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
      <Card>
        <CardHeader tag="h3">Search Vehicle</CardHeader>
        <CardBody>
			     <Form onSubmit={this.handleSubmit}>
				      <Label for="plate">Plate:</Label>
		          <Input name="plate" id="find_plate" onChange={this.handleChange} placeholder="Insert a plate" />
              <br/>
              <Button id="find_submit" style={{float: 'right'}} color="primary">Submit</Button>
           </Form>
        </CardBody>
      </Card>
    );
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.fetchQuotes(Constant.PARKINGRESTURL_RESOURCECAR, this.state.plate)
    event.preventDefault();
  }

  fetchQuotes = (url, plate) => {
    if(plate){
      fetch(url+plate)
      .then(res => {
        if(res.status === 200){
          res.json().then(
            (result) => {
              var msg = 'vehicle found!';
              this.props.noti(msg, Constant.TYPE_NOTIFICATION_SUCCESS);
              this.props.handleToUpdate(result)
            }
          )
        }else{
          var msg = 'vehicle not found!';
          this.props.noti(msg, Constant.TYPE_NOTIFICATION_WARNING);
          this.props.handleToUpdate(null)
        }
      }).catch(err => {this.props.noti('Service is not avalible at the moment', Constant.TYPE_NOTIFICATION_DANGER);});
    }else{
      var msg = 'vehicle not found!';
      this.props.noti(msg, Constant.TYPE_NOTIFICATION_WARNING);
      this.props.handleToUpdate(null)
    }

  }

}

export default VehicleFind
