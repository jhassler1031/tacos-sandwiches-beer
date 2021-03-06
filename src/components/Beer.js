import React, { Component } from 'react';

class Beer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="beer">
        <p>Name: {this.props.beer.beerName}</p>
        <p>Type: {this.props.beer.type}</p>
        <p>This beer belongs here: {this.props.beer.whereItBelongs}</p>
        <input type="button" value="Delete Beer" onClick={this.props.delBeer}/>
      </div>
    );
  }
}

export default Beer;
