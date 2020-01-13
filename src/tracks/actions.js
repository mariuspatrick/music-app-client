import api from "../api";

function tracksFetched(data) {
  console.log("data in tracks actions: ", data);
  return {
    type: "TRACKS_FETCHED",
    payload: data.tracks
  };
}

export function fetchedTracks(playlistId) {
  return function thunk(dispatch, getState) {
    api(`/genres/${playlistId}`).then(tracks => {
      dispatch(tracksFetched(tracks));
    });
  };
}
