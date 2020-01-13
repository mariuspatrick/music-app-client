import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchedTracks } from "../tracks/actions";

class Tracks extends Component {
  state = {
    checked: false
  };

  Checkbox = props => {
    return <input type="checkbox" {...props} />;
  };

  handleCheckBoxChange = event => {
    // Find a way to select divs individually
    this.setState({ checked: event.target.checked });
  };

  componentDidMount() {
    const id = this.props.match.params.playlistId;
    this.props.dispatch(fetchedTracks(id));
  }
  render() {
    console.log("this.props.tracks: ", this.props.tracks);
    const loading = !this.props.tracks;

    const sortTracks = track => {
      // Filters out tracks that are null
      if (track.track) return track.track.name;
    };

    const getArtistsName = track => {
      if (track.track)
        track.track.artists.map(artist => {
          console.log("artist.name", artist.name);
          return artist.name;
        });
    };

    return (
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          this.props.tracks.items.map((track, index) => {
            return (
              <div key={index} style={{ border: "2px solid" }}>
                <h4>{sortTracks(track)}</h4>
                <h5>
                  {track.track &&
                    track.track.artists.map(artist => {
                      return artist.name;
                    })}
                  {/* {getArtistsName(track)} */}
                </h5>
                <label>
                  <this.Checkbox
                    checked={this.state.checked}
                    onChange={this.handleCheckBoxChange}
                  />
                </label>
              </div>
            );
            // }
          })
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("reduxState in tracks", state);
  return {
    tracks: state.tracks
  };
}

export default connect(mapStateToProps)(Tracks);
