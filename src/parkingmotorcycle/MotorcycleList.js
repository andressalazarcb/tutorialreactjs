import React, { Component } from 'react';
import * as Constant from '../Constant'

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
      <div>
        <div>
        <table width="100%">
            <thead>
              <tr>
                <th>MotorcycleId</th>
              </tr>
            </thead>
            <tbody>
            {this.state.motorcycles.map(item => (
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
