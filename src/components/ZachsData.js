import React, { Component } from 'react';
import Sandwich from './Sandwich.js';

class ZachsData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zachsData: []
    };

  }

  componentDidMount() {
    let self = this;

    fetch('http://tiny-lasagna-server.herokuapp.com/collections/zthigpen')
    .then((response)=>{
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((responseAsJson)=>{
      console.log(responseAsJson);
      self.setState({zachsData: responseAsJson});
    })
    .catch((error)=>{
      console.log("There was a problem: \n", error);
    });
  }

  render() {
    let $sandwiches = this.state.zachsData.map((sandwich)=>{
      return (
        <Sandwich key={sandwich._id} sandwich={sandwich}/>
      );
    })

    return (
      <div className="zachsData">
        <p>Zach's Data</p>
        {$sandwiches}
      </div>
    );
  }
}

export default ZachsData;
