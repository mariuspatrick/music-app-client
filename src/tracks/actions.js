import api from "../api";

function tracksFetched(data) {
  return {
    type: "TRACKS_FETCHED",
    payload: data.body
  };
}

export function fetchedTracks(playlistId) {
  return function thunk(dispatch, getState) {
    api(`/genres/${playlistId}`).then(tracks => {
      dispatch(tracksFetched(tracks));
    });
  };
}
