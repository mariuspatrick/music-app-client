import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchedTracks } from "../tracks/actions";
import CheckBox from "./Checkbox";

class Tracks extends Component {
  state = {
    playlistTracks: []
  };
  componentDidMount() {
    const id = this.props.match.params.tracksId;

    console.log("this.props in tracks.js: ", this.props);
    this.props.dispatch(fetchedTracks(id));
  }

  trackId = track => {
    // console.log("track id ", track.track.id);
    const id = track.track.id;

    this.state.playlistTracks.push(id);
  };

  render() {
    console.log("this.props.tracks: ", this.props.tracks);
    let loading = !this.props.tracks;

    // Filters out tracks that are null
    const sortTracks = track => {
      if (track.track) return track.track.name;
    };

    return (
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          this.props.tracks.items.map((track, index) => {
            return (
              <div
                key={index}
                style={{ border: "2px solid", borderRadius: "25px" }}
              >
                <h4>{sortTracks(track)}</h4>
                <h5>
                  {track.track &&
                    track.track.artists.map(artist => {
                      return artist.name;
                    })}
                </h5>
                {track.track && (
                  <CheckBox getTrackId={() => this.trackId(track)} />
                )}
              </div>
            );
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
