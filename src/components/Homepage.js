import React, { Component } from "react";
import { connect } from "react-redux";
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
  };

  render() {
    console.log("this.props", this.props);
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
            <button type="submit">Searchie Search</button>
          </form>
        ) : (
          this.props.tracks.playlists.items.map(tracks => {
            return (
              <div style={{ border: "solid 5px" }}>
                <h4>{tracks.name}</h4>
                <p>{tracks.description}</p>
                {tracks &&
                  tracks.images.map(image => {
                    return <img src={image.url}></img>;
                  })}
              </div>
            );
          })
          //   this.props.tracks.playlists.
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("reduxState in homepage", state.playlist);
  return {
    tracks: state.playlist
  };
}

export default connect(mapStateToProps)(Homepage);
