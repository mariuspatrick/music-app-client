import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { getUserPlaylists } from "../user_playlist/actions";

class Homepage extends Component {
  render() {
    const auth = this.props.auth;
    return (
      <div>
        {auth.jwt ? (
          <div>
            <h2>Hello {auth.name}</h2>

            <Button
              // variant="contained"
              // color="primary"
              // disableElevation
              onClick={() => this.props.history.push("/playlist")}
            >
              Create Playlist
            </Button>
            <p></p>
            {this.props.allPlaylists && <h4>Your playlists: </h4>}
            {this.props.allPlaylists &&
              this.props.allPlaylists.map((playlist, index) => {
                return (
                  <div
                    onClick={() => this.props.history.push("/playlists")}
                    key={index}
                    style={{
                      border: "2px solid",
                      borderRadius: "100px",
                      display: "flex",
                      // float: "left",
                      // justifyContent: "left"
                      // // marginRight: "40cm",
                      // textAlign: "center"
                      flexDirection: "column"
                    }}
                  >
                    <p>{playlist.name}</p>
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
