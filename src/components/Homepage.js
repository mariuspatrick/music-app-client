import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchedPlaylist } from "../artists/actions";

class Homepage extends Component {
  state = {
    genre: ""
  };

  componentDidMount() {
    this.props.dispatch(fetchedPlaylist);
  }

  render() {
    const loading = !this.props.artist;
    return (
      <div>
        {!loading && (
          <h3>Number of tracks on page: {this.props.artist.tracks.length}</h3>
        )}
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          this.props.artist.tracks.map(track => {
            return (
              <div key={track.id} onClick={this.clickMe}>
                <p>Track: {track.name}</p>

                {track.artists.map(artist => {
                  return <p>Artist: {artist.name}</p>;
                })}
                {/* <button>Add</button> */}
              </div>
            );
          })
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("reduxState in homepage", state.artist);
  return {
    artist: state.artist
  };
}

export default connect(mapStateToProps)(Homepage);
