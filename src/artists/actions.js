import api from "../api";

function playlistFetched(data) {
  return {
    type: "ARTIST_FETCH_SUCCES",
    payload: data.body
  };
}

export function fetchedPlaylist(genre) {
  return function thunk(dispatch, getState) {
    api("/genres", {
      method: "GET",
      body: {
        genre
      }
    }).then(playlist => {
      dispatch(playlistFetched(playlist));
    });
  };
}
