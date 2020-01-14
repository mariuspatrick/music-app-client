import api from "../api";

function newPlaylist(playlistId) {
  console.log("playlistId in actions: ", playlistId);
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

function getPlaylist(playlistName) {
  console.log("playlist name", playlistName);
  return {
    type: "GET_USER_PLAYLIST",
    payload: playlistName
  };
}

export function getNewUserPlaylist(jwt) {
  return function thunk(dispatch, getState) {
    console.log("we are here");
    api("/playlist", {
      method: "GET",
      jwt: jwt
    }).then(playlist => {
      dispatch(getPlaylist(playlist.name));
    });
  };
}
