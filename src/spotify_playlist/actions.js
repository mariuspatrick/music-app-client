import api from "../api";

function playlistFetched(data) {
  return {
    type: "PLAYLIST_FETCH_SUCCES",
    payload: data.body
  };
}

export function fetchedPlaylist(genre) {
  return function thunk(dispatch, getState) {
    api(`/genres?genre=${genre}`).then(playlist => {
      dispatch(playlistFetched(playlist));
    });
  };
}
