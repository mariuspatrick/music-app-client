import api from "../api";

function newPlaylist(playlistId) {
  // console.log("playlistId in actions: ", playlistId);
  return {
    type: "CREATE_USER_PLAYLIST",
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

function saveUserPlaylists(playlists) {
  // console.log("playlist name", playlistName);
  return {
    type: "SAVE_USER_PLAYLISTS",
    payload: playlists
  };
}

export function getUserPlaylists() {
  return function thunk(dispatch, getState) {
    const jwt = getState().auth.jwt;
    console.log("jwt in user_playlist, jwt", getState());
    api("/playlist", {
      method: "GET",
      jwt: jwt
    })
      .then(allPlaylists => {
        dispatch(saveUserPlaylists(allPlaylists));
      })
      .catch(err => {
        console.error(err);
      });
  };
}
