import React, { Component } from 'react';

class Sandwich extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sandwich">
        <p>Sandwich Name: {this.props.sandwich.name}</p>
        <p>Ingredients: {this.props.sandwich.ingredients.join(" ")}</p>
      </div>
    );
  }
}

export default Sandwich;
