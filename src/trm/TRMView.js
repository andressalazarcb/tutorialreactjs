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
        <p className="text-info">Current TRM is: {new Intl.NumberFormat('co-CO', { style: 'currency', currency: 'COP' }).format(this.state.trm)} </p>
      </div>);
  }

  componentDidMount() {
    fetch(Constant.SUPERFINANCIERARESTURL_RESOURCETRM)
      .then(res => {
        if(res.status === 200){
          res.json().then(
            (result) => {
              this.setState({
                isLoaded: true,
                trm: result.value
              });
            }
          )
        }else{
          this.setState({
            isLoaded: true,
            trm: null
          });
        }
      });
  }

}

export default TRMView
