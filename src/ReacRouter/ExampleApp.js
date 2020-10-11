import React, { Component } from "react";
import NavPages from "./Components/NavPages";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

class ExampleApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-app">
          <NavPages />
        </div>
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
      </BrowserRouter>
    );
  }
}

export default ExampleApp;
