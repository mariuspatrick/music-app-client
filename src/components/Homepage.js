import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
// import { getUserPlaylists } from "../user_playlist/actions";
import Box from "@material-ui/core/Box";

class Homepage extends Component {
  render() {
    const defaultProps = {
      bgcolor: "gray",
      borderColor: "transparent",
      m: 1,
      justifyContent: "auto",
      border: 1,
      style: { width: "auto", height: "auto" }
    };
    const auth = this.props.auth;
    return (
      <div>
        {auth.jwt ? (
          <div>
            <h2>Hello {auth.name}</h2>

            <Button onClick={() => this.props.history.push("/playlist")}>
              Create Playlist
            </Button>
            <p></p>
            {this.props.allPlaylists && <h4>Your playlists: </h4>}
            {this.props.allPlaylists &&
              this.props.allPlaylists.map((playlist, index) => {
                return (
                  <div key={index}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      onClick={() => this.props.history.push("/playlists")}
                    >
                      <Box borderRadius={10} {...defaultProps}>
                        <Button>{playlist.name}</Button>
                      </Box>
                    </Box>
                  </div>
                );
              })}
          </div>
        ) : (
          <div>
            <h2>Login to search for songs</h2>
            <Button onClick={() => this.props.history.push("/login")}>
              Log In
            </Button>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allPlaylists: state.userPlaylists.allUsersPlaylists,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Homepage);
