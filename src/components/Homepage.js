import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetchedPlaylist } from "../playlist/actions";

class Homepage extends Component {
  state = {
    genre: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const action = fetchedPlaylist(this.state.genre);

    this.props.dispatch(action);
    // this.props.history.push("/playlists");
  };

  render() {
    console.log("this.props in home", this.props);

    const auth = this.props.auth;
    return (
      <div>
        {auth.jwt ? (
          <div>
            <h2>Hello {auth.name}</h2>

            {/* <button onClick={() => this.props.history.push("/playlists")}>
              Search for songs
            </button> */}
            <form onSubmit={this.handleSubmit}>
              <p>
                <Button
                  // variant="contained"
                  // color="primary"
                  // disableElevation
                  onClick={() => this.props.history.push("/playlist")}
                >
                  Create Playlist
                </Button>
              </p>
              Genre:
              <p>
                <input
                  type="text"
                  name="genre"
                  value={this.state.genre}
                  onChange={this.handleChange}
                />
              </p>
              <Button
                onClick={this.handleSubmit}
                // variant="contained" color="primary" disableElevation
              >
                Search
              </Button>
            </form>
          </div>
        ) : (
          // <form onSubmit={this.handleSubmit}>
          //   <p>
          //     <Button
          //       // variant="contained"
          //       // color="primary"
          //       // disableElevation
          //       onClick={() => this.props.history.push("/playlist")}
          //     >
          //       {/* <Link to="/playlist">
          //             <button>Create playlist</button>
          //           </Link> */}
          //       Create Playlist
          //     </Button>
          //   </p>
          //   Genre:
          //   <p>
          //     <input
          //       type="text"
          //       name="genre"
          //       value={this.state.genre}
          //       onChange={this.handleChange}
          //     />
          //   </p>
          //   <Button
          //     onClick={this.handleSubmit}
          //     // variant="contained" color="primary" disableElevation
          //   >
          //     Search
          //   </Button>
          // </form>
          <div>
            <h2>LogIn to search for songs</h2>
            <Button onClick={() => this.props.history.push("/login")}>
              Log In
            </Button>
          </div>
        )}
        {/* {!playlists && (
          <button
            onClick={() => {
              
            }}
          >
            BIG
          </button>
        )} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.playlist,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Homepage);
