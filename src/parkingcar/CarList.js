import React, { Component } from 'react';
import * as Constant from '../Constant'

class CarList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cars: []
    };
  }


  render() {
    return (
      <div>
        <div>
        <table width="100%">
            <thead>
              <tr>
                <th>CarId</th>
              </tr>
            </thead>
            <tbody>
            {this.state.cars.map(item => (
              <tr key={item.plate}>
                <td>{item.plate}</td>
              </tr>
            ))}
            </tbody>
        </table>

          </div>
      </div>);
  }

  componentDidMount() {
    this.fetchQuotes()
    this.timer = setInterval(() => this.fetchQuotes(), 15000);
  }

  componentWillUnmount() {
    this.timer = null;
  }

  fetchQuotes = () => {
    fetch(Constant.PARKINGRESTURL_RESOURCECAR)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cars: result.content
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

export default CarList
