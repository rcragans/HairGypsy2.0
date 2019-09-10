import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path = "/" component={Home}></Route>
            <Route exact path ="/aboutme" component={AboutMe}></Route>
            <Route exact path="/services" component={Services}></Route>
          </div>
        </div>
      </Router>
    );
  }  
}

export default App;
