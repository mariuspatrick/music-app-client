import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewPlaylist } from "../user_playlist/actions";
import { getNewUserPlaylist } from "../user_playlist/actions";
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
    // if(this.props.)
  };

  render() {
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
        </form>
        {this.props.auth.jwt && (
          <Button
            onClick={() =>
              this.props.dispatch(getNewUserPlaylist(this.props.auth.jwt))
            }
          >
            Show playlist
          </Button>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("reduxState in createPlaylist.js", state);
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(CreatePlaylist);
