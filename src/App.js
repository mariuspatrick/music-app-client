import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Tracks from "./components/Tracks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <header className="App-header">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/:playlistId" component={Tracks} />
          </header>
        </Switch>
      </div>
    );
  }
}

export default App;
