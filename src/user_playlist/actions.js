import api from "../api";

function newPlaylist(playlistId) {
  return {
    type: "CREATE_NEW_PLAYLIST",
    payload: playlistId
  };
}

export function createNewPlaylist(name, jwt) {
  return function thunk(dispatch, getState) {
    api(`/playlist`, {
      method: "POST",
      body: {
        name
      },
      jwt: jwt
    })
      .then(playlist => {
        dispatch(newPlaylist(playlist.id));
      })
      .catch(err => console.error(err));
  };
}
