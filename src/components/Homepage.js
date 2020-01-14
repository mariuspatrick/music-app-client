import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchedPlaylist } from "../playlist/actions";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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
  };

  render() {
    console.log("this.props", this.props.tracks);
    const playlists = !this.props.tracks;
    return (
      <div>
        <p></p>
        {playlists
          ? this.props.auth.jwt && (
              <form onSubmit={this.handleSubmit}>
                <p>
                  <Link to="/playlist">
                    <button>Create playlist</button>
                  </Link>
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
                <Button variant="contained" color="black" disableElevation>
                  Search
                </Button>
              </form>
            )
          : this.props.tracks.playlists.items.map(tracks => {
              return (
                <div
                  style={{
                    border: "solid 5px",
                    // transitionProperty: "all",
                    // transitionDuration: "3s",
                    transition:
                      "width 2s, height 2s, backround-color 2s, transform 2s"
                  }}
                  onClick={() => {
                    this.props.history.push(`/genres/${tracks.id}`);
                  }}
                >
                  <h4>{tracks.name}</h4>
                  <p>{tracks.description}</p>

                  {/* Map over images array to get image for each playlist */}

                  {tracks &&
                    tracks.images.map(image => {
                      return <img src={image.url}></img>;
                    })}
                </div>
              );
            })}
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
