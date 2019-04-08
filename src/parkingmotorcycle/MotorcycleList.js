import React, { Component } from 'react';
import * as Constant from '../Constant';
import { Table, Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

class MotorcycleList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      motorcycles: []
    };
  }


  render() {
    return (
      <Card>
      <CardHeader tag="h3">Motorcycles that are parking</CardHeader>
      <CardBody>
        <Table striped>
            <thead>
              <tr>
                <th>Motorcycle Id</th>
              </tr>
            </thead>
            <tbody>
            {this.state.motorcycles.map(item => (
              <tr key={item.plate}>
                <td>{item.plate}</td>
              </tr>
            ))}
            </tbody>
        </Table>
      </CardBody>
    </Card>);
  }

  componentDidMount() {
    this.fetchQuotes()
    this.timer = setInterval(() => this.fetchQuotes(), 15000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  fetchQuotes = () => {
    fetch(Constant.PARKINGRESTURL_RESOURCEMOTORCYCLE)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            motorcycles: result.content
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

}

export default MotorcycleList
