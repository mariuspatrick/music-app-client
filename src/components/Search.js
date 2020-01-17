import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetchedPlaylist } from "../spotify_playlist/actions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { getNewTracks } from "../tracks/actions";

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
    this.props.dispatch(getNewTracks);
    console.log("butt supreme", this.props);
  }
  render() {
    const playlists = !this.props.tracks;
    return (
      <div>
        {playlists ? (
          <form onSubmit={this.handleSubmit}>
            {/* <p> */}
            <TextField
              id="genreText"
              name="genre"
              label="Genre"
              value={this.state.genre}
              onChange={this.handleChange}
            />
            {/* <input
                type="text"
                name="genre"
                value={this.state.genre}
                onChange={this.handleChange}
              /> */}
            {/* </p> */}
            <Button
              onClick={this.handleSubmit}
              style={{ color: "white" }}
              // variant="contained" color="primary" disableElevation
            >
              Search
            </Button>
          </form>
        ) : (
          this.props.tracks.playlists.items.map((playlists, index) => {
            return (
              <div
                key={index}
                onClick={() =>
                  this.props.history.push(`/genres/${playlists.id}`)
                }
              >
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={playlists.title}
                />

                <CardMedia
                  className="image"
                  image={playlists.images.map(image => {
                    return image.url;
                  })}
                  title="playlist_image"
                />
                <img src={playlists.images.map(image => image.url)}></img>

                <CardContent>
                  <Typography
                    style={{ fontSize: "46px" }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    // style={{ fontSize: "42px" }}
                  >
                    {playlists.description}
                  </Typography>
                  <Typography>{playlists.name}</Typography>
                </CardContent>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("reduxState in Search", state);
  return {
    tracks: state.spotifyPlaylists
  };
}

export default connect(mapStateToProps)(Search);
