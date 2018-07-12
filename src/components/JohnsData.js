import React, { Component } from 'react';
import Beer from './Beer.js';

class JohnsData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      johnsData: []
    };

    this._postData = this._postData.bind(this);
    this._editData = this._editData.bind(this);
    this._delData = this._delData.bind(this);

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
      console.log(responseAsJson);
      self.setState({johnsData: responseAsJson});
    })
    .catch((error)=>{
      console.log("There was a problem: \n", error);
    });
  }

  // POST method ===============================================================
  _postData() {
    let beers = this.state.johnsData;
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

    beers.unshift(context);
    this.setState(beers);
  }

  // PUT method ================================================================
  _editData() {
    let id = "5b47978d0ce3c40004fea5c5";

    let context = {
      beerName: "Natty Light",
      type: "Piss Water",
      whereItBelongs: "In the toilet"
    };

    fetch(`http://tiny-lasagna-server.herokuapp.com/collections/johnhassler/${id}`,{
      method: "PUT",
      body: JSON.stringify(context),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('Looks like there was an error: \n', error);
    });
  }

  // DELETE Method =============================================================
  _delData(beer) {
    let id = beer._id; //"5b47bd0ed881000004127e35";
    let beers = this.state.johnsData;

    fetch(`http://tiny-lasagna-server.herokuapp.com/collections/johnhassler/${id}`,{
      method: "DELETE",
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('Looks like there was an error: \n', error);
    });

    beers.splice(beers.indexOf(beer), 1);
    this.setState({beers});
  }

  // Render ====================================================================
  render() {
    let self = this;
    let $beers = this.state.johnsData.map((beer)=>{
      return (
        <Beer key={beer._id} beer={beer} delBeer={()=>{self._delData(beer)}}/>
      );
    })

    return (
      <div className="johnsPage">
        <p>John's Beer List</p>
        {$beers}
        <input type="button" value="Add Beer" onClick={this._postData}/>
        <input type="button" value="Edit Beer" onClick={this._editData}/>
        {/* <input type="button" value="Delete Beer" onClick={this._delData}/> */}
      </div>
    );
  }
}

export default JohnsData;
