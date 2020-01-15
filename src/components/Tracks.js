import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchedTracks } from "../tracks/actions";
import CheckBox from "./Checkbox";
import { sendTracks } from "../tracks/actions";
import Button from "@material-ui/core/Button";

class Tracks extends Component {
  state = {
    playlistTracks: []
  };
  componentDidMount() {
    const id = this.props.match.params.tracksId;

    this.props.dispatch(fetchedTracks(id));
  }

  trackId = track => {
    const id = track.track.id;

    this.state.playlistTracks.push(id);
  };

  render() {
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
        <Button
          onClick={() => {
            this.props.dispatch(
              sendTracks(this.state.playlistTracks, this.props.auth.jwt)
            );
          }}
        >
          Add
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Tracks);
