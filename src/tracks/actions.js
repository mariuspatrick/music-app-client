import api from "../api";

function spotifyTracksFetched(data) {
  return {
    type: "SPOTIFY_TRACKS_FETCHED",
    payload: data.tracks
  };
}

export function fetchedTracks(playlistId) {
  return function thunk(dispatch, getState) {
    api(`/genres/${playlistId}`).then(tracks => {
      dispatch(spotifyTracksFetched(tracks));
    });
  };
}

function sendNewTracks(data) {
  return {
    type: "SET_SONGS_FOR_CURRENT_PLAYLIST",
    payload: data
  };
}

export function sendTracks(tracksIdArray, jwt) {
  return function thunk(dispatch, getState) {
    tracksIdArray.forEach(trackId => {
      api(`/tracks`, {
        method: "POST",
        body: {
          trackId
        },
        jwt
      })
        .then(
          dispatch(sendNewTracks(trackId))
          // tracksIdArray.forEach(trackId => {
          // })
        )
        .then(getUserTracks(trackId))
        .catch(err => console.error(err));
    });
  };
}

export function getNewTracks(track) {
  return function thunk(dispatch, getState) {
    api("/tracks").then(dispatch(getUserTracks(track)));
  };
}

function getUserTracks(track) {
  return {
    type: "GET_TRACKS",
    payload: track
  };
}
