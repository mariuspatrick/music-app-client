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
    console.log("this.props", this.props.tracks);
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
              <div
                style={{ border: "solid 5px" }}
                onClick={() => {
                  this.props.history.push(`/${tracks.id}`);
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
    tracks: state.playlist
  };
}

export default connect(mapStateToProps)(Homepage);
