import React, { Component } from 'react';

class JohnsData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      johnsData: []
    };

    this._postData = this._postData.bind(this);

  }

  // GET method ================================================================
  componentDidMount() {
    let self = this;

    fetch('http://tiny-lasagna-server.herokuapp.com/collections/johnhassler')
    .then((response)=>{
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((responseAsJson)=>{
      self.setState({johnsData: responseAsJson});
    })
    .catch((error)=>{
      console.log("There was a problem: \n", error);
    });
  }

  // POST method ===============================================================
  _postData() {
    let context = {
      beerName: "New Belgium la Folie",
      type: "Pure Awesome",
      whereItBelongs: "In ma belly!"
    };

    fetch('http://tiny-lasagna-server.herokuapp.com/collections/johnhassler',{
      method: "POST",
      body: JSON.stringify(context),
      headers: {
        'Content-Type': "application/json"
      }
    })
    .then((response)=>{
      console.log(response);
    })
    .catch((error)=>{
      console.log("There was a problem: \n", error);
    });
  }

  render() {
    return (
      <div className="johnsPage">
        <p>John's Data</p>
        <input type="button" value="Add Beer" onClick={this._postData}/>
      </div>
    );
  }
}

export default JohnsData;
