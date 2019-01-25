import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, Link} from 'react-router-dom';

// const clearedSmurf ={
//   id:'',
//   name: '',
//   age: '',
//   height:''
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
     
    };
  }

  componentDidMount() {
    axios
    .get('https://localhost:3333/smurfs')
    .then(res => {
      this.setState({
        smurfs: res.data
      })
      
      })
      .catch(err => {
        this.setState({error: err})
    })
  }

  

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Link to={`/smurfs`}>Smurfs</Link>
        <Route exact path="/smurf-form" render={props => <SmurfForm {...props} addSmurf={this.addSmurf}/> }></Route>
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}></Route>
      </div>
    );
  }
}

export default App;
