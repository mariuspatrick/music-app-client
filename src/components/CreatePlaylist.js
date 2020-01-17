import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewPlaylist } from "../user_playlist/actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
    // event.preventDefault();
    const jwt = this.props.auth.jwt;

    const action = createNewPlaylist(this.state.playlistName, jwt);

    this.props.dispatch(action);
    this.props.history.push("/");
  };

  render() {
    // const playlist = !this.props.playlist;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Pick a name for your playlist:
          <p></p>
          <TextField
            // autoComplete="off"
            id="playlist-text"
            name="playlistName"
            label="Playlist"
            variant="outlined"
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
