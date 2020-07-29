import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import WebcamCapture from './WebCam/webcam'
import {connect} from "react-redux"

class App extends React.Component{
  
  render(){
    return(
      <Router>

        <Header></Header>
        <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/webcamCapture" component={WebcamCapture}></Route>
        </Switch>
      </Router>
    )
  }
}

export default connect(null, null)(App)

