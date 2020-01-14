import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Tracks from "./components/Tracks";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Toolbar from "./components/Toolbar";
import Search from "./components/Search";
import CreatePLaylist from "./components/CreatePlaylist";
import { userLoggedIn } from "./signup/actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    const jwt = localStorage.getItem("jwt");
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");

    if (jwt) this.props.dispatch(userLoggedIn(jwt, name, id));
  }
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <header className="App-header">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/playlists" component={Search} />
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

export default connect()(App);
