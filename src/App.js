import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Tracks from "./components/Tracks";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Toolbar from "./components/Toolbar";
import CreatePLaylist from "./components/CreatePlaylist";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <header className="App-header">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/playlist" component={CreatePLaylist} />
            <Route path="/genres/:tracksId" component={Tracks} />
          </header>
        </Switch>
      </div>
    );
  }
}

export default App;
