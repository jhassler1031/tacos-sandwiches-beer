import React, { Component } from 'react';

class JohnsData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      johnsData: []
    };

  }

  componentDidMount() {
    let self = this;
  }

  render() {
    return (
      <p>John's Data</p>
    );
  }
}

export default JohnsData;
