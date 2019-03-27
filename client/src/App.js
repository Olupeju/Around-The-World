import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Culture from "./components/Culture";
import Navbar from "./components/Navbar";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Culture />
        </div>
      </Router>

    );
  }
}

export default App;
