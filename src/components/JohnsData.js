import React, { Component } from 'react';
import Beer from './Beer.js';

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
      beerName: "PBR",
      type: "Piss Water",
      whereItBelongs: "In the toilet"
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
    let $beers = this.state.johnsData.map((beer)=>{
      return (
        <Beer key={beer._id} beer={beer}/>
      );
    })

    return (
      <div className="johnsPage">
        <p>John's Beer List</p>
        {$beers}
        <input type="button" value="Add Beer" onClick={this._postData}/>
      </div>
    );
  }
}

export default JohnsData;
