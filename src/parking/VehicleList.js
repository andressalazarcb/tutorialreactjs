import React, { Component } from 'react';
import { Table, Card, CardHeader, CardBody } from 'reactstrap';

class VehicleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      vehicles: []
    };
  }


  render() {
    return (

      <Card>
        <CardHeader tag="h3">{this.props.title}</CardHeader>
        <CardBody>
          <Table striped>
              <thead>
                <tr>
                  <th>{this.props.columnLabel}</th>
                </tr>
              </thead>
              <tbody>
              {this.state.vehicles.map(item => (
                <tr key={item.plate}>
                  <td>{item.plate}</td>
                </tr>
              ))}
              </tbody>
          </Table>
        </CardBody>
      </Card>



          );
  }

  componentDidMount() {
    this.fetchQuotes()
    this.timer = setInterval(() => this.fetchQuotes(), 15000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  fetchQuotes = () => {
    fetch(this.props.url)
    .then(res => {
      if(res.status === 201 || res.status === 200){
        res.json().then(
          (result) => {
            this.setState({
              isLoaded: true,
              vehicles: result
            });
          }
        )
      }else{
        this.setState({
          isLoaded: true,
          vehicles: []
        });
      }
    }).catch(err => {
      this.setState({
        vehicles: []
      });
    });;
  }

}

export default VehicleList
