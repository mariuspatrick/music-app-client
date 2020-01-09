import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <header className="App-header">
            <Route exact path="/" component={Homepage} />
          </header>
        </Switch>
      </div>
    );
  }
}

export default App;
