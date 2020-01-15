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

export function sendTracks(trackId, jwt) {
  return function thunk(dispatch, getState) {
    api(`/tracks/:playlistId`, {
      method: "POST",
      body: {
        trackId
      },
      jwt
    })
      .then(tracks => {
        dispatch(sendNewTracks(tracks));
      })
      .catch(err => console.error(err));
  };
}
