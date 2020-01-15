import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetchedPlaylist } from "../spotify_playlist/actions";

class Search extends Component {
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
  componentDidMount() {
    // console.log("this.props in Search js", this.props);
  }
  render() {
    const playlists = !this.props.tracks;
    return (
      <div>
        {playlists ? (
          <form onSubmit={this.handleSubmit}>
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
        ) : (
          // <h2>Error</h2>
          this.props.tracks.playlists.items.map(tracks => {
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
          })
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("reduxState in Search.js:", state);

  return {
    tracks: state.spotifyPlaylists
  };
}

export default connect(mapStateToProps)(Search);
