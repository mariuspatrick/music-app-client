import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewPlaylist } from "../user_playlist/actions";

class CreatePlaylist extends Component {
  state = {
    playlistName: ""
  };

  handleChange = event => {
    this.setState({
      playlistName: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const jwt = this.props.auth.jwt;

    const action = createNewPlaylist(this.state.playlistName, jwt);

    this.props.dispatch(action);
  };

  render() {
    return (
      <div>
        <h2>Create your playlist: </h2>
        <form onSubmit={this.handleSubmit}>
          Playlist name:
          <input
            type="text"
            name="playlistName"
            value={this.state.playlistName}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("reduxState in createPlaylist.js", state.auth);
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(CreatePlaylist);
