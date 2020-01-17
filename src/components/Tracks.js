import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchedTracks } from "../tracks/actions";
import CheckBox from "./Checkbox";
import { sendTracks } from "../tracks/actions";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

class Tracks extends Component {
  state = {
    playlistTracks: [],
    playlistNames: []
  };
  componentDidMount() {
    const id = this.props.match.params.tracksId;

    this.props.dispatch(fetchedTracks(id));
  }

  trackId = track => {
    const id = track.track.id;
    const name = track.track.name;

    if (!this.state.playlistTracks.includes(id)) {
      //Gets tracks id and name and stores them in the state
      this.state.playlistTracks.push(id);
      this.state.playlistNames.push(name);
    }
  };

  render() {
    let loading = !this.props.tracks;

    // Filters out tracks that are null
    const sortTracks = track => {
      if (track.track) return track.track.name;
    };

    return (
      <div key="2">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          this.props.tracks.items.map((track, index) => {
            return (
              <div key={index}>
                <Avatar
                  style={{
                    position: "fixed",
                    width: "60px",
                    height: "60px",
                    bottom: "40px",
                    right: "40px",
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "50px",
                    textAlign: "center"
                  }}
                  aria-label="recipe"
                  className="icon"
                  onClick={() => {
                    this.props.dispatch(
                      sendTracks(this.state.playlistTracks, this.props.auth.jwt)
                    );
                  }}
                >
                  +
                </Avatar>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  // title=""
                />
                <CardMedia className="image" image="" title="songs" />
                <CardContent style={{ border: "2px solid" }}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ fontSize: "42px" }}
                  >
                    {sortTracks(track)}
                  </Typography>
                  <Typography>
                    {track.track &&
                      track.track.artists.map(artist => {
                        return artist.name;
                      })}
                  </Typography>
                  {track.track && (
                    <CheckBox getTrackId={() => this.trackId(track)} />
                  )}
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
  return {
    tracks: state.tracks,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Tracks);
