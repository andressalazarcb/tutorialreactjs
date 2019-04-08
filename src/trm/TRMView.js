import React, { Component } from 'react';
import * as Constant from '../Constant'

class TRMView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      trm: null
    };
  }


  render() {
    return (
      <div>
        <p className="text-info">La TRM de Hoy es: $ {this.state.trm} COP</p>
      </div>);
  }

  componentDidMount() {
    fetch(Constant.SUPERFINANCIERARESTURL_RESOURCETRM)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            trm: result.value
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

export default TRMView
