import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewPlaylist } from "../user_playlist/actions";
import Button from "@material-ui/core/Button";

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
    console.log("props in createPlaylist", this.props.playlist);
    // const playlist = !this.props.playlist;
    return (
      <div>
        <h2>Create your playlist: </h2>
        <form onSubmit={this.handleSubmit}>
          Pick a name:
          <p></p>
          <input
            type="text"
            name="playlistName"
            value={this.state.playlistName}
            onChange={this.handleChange}
          />
          <p></p>
          <Button type="submit">Create</Button>
        </form>
        {/* <Button onClick={() => this.props.dispatch(getUserPlaylists())}>
          Show playlist
        </Button> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("reduxState in createPlaylist.js", state);
  return {
    auth: state.auth,
    playlist: state.currentUserPlaylist
  };
}

export default connect(mapStateToProps)(CreatePlaylist);
