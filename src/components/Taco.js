import React, { Component } from 'react';

class Taco extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="taco">
        <p>Taco Name: {this.props.TacoName}</p>
        {/* Need to add .join(" ") to ingredients but there's no data right now */}
        <p>Ingredients: {this.props.ingredients}</p>
      </div>
    );
  }
}

export default Taco;
