import React, { Component } from 'react';
import Taco from './Taco.js';

class KevinsData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kevinsData: []
    };

  }

  componentDidMount() {
    let self = this;

    fetch('http://tiny-lasagna-server.herokuapp.com/collections/kevinbeach')
    .then((response)=>{
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((responseAsJson)=>{
      console.log(responseAsJson);
      self.setState({kevinsData: responseAsJson});
    })
    .catch((error)=>{
      console.log("There was a problem: \n", error);
    });
  }

  render() {
    let $tacos = this.state.kevinsData.map((taco)=>{
      return (
        <Taco key={taco._id} taco={taco}/>
      );
    })

    return (
      <div>
        <p>Kevin's Data</p>
        {$tacos}
      </div>
    );
  }
}

export default KevinsData;
