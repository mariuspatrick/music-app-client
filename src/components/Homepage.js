import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchedArtists } from "../artists/actions";

class Homepage extends Component {
  componentDidMount() {
    console.log("this props in Homepage:", this.props);
    this.props.dispatch(fetchedArtists);
  }
  render() {
    const loading = !this.props.artist;
    return (
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          this.props.artist.tracks.map(artist => {
            return <h1>Name: {artist.name}</h1>;
          })
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state in homepage", state.artist);
  return {
    artist: state.artist
  };
}

export default connect(mapStateToProps)(Homepage);
