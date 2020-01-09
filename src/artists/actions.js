import api from "../api";

function artistFetched(data) {
  return {
    type: "ARTIST_FETCH_SUCCES",
    payload: data.body
  };
}

export function fetchedArtists(dispatch, getState) {
  api("/").then(artist => {
    dispatch(artistFetched(artist));
  });
}
