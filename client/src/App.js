import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Culture from "./components/Culture";
import Navbar from "./components/Navbar";
import Food from "./components/Food";
import FlightTracker from "./components/FlightTracker";
import Airline from "./components/Airline";
import Header from "./components/Header";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      userData: null

    }
  }
  authoChanger(data){
    this.setState({
      isAuthenticated:true,
      userData: data
    })
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    if(this.state.isAuthenticated === false){
      return(
        <Router>
          <div>
            <Navbar />
            < Header />
          </div>
        </Router>
      )
    }
    return (
      <Router>
        <div>
          <Navbar />
          <Culture />
          <Food />
          <Airline />
          <FlightTracker />
        </div>
      </Router>

    );
  }
}

export default App;
