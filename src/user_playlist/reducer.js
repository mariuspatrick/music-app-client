const initialState = {
  currentPlaylist: null,
  songsForPlaylist: [],
  allUsersPlaylists: [],
  userTracks: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_USER_PLAYLIST": {
      return { ...state, currentPlaylist: action.payload };
    }
    case "SAVE_USER_PLAYLISTS": {
      return {
        ...state,
        allUsersPlaylists: action.payload
      };
    }
    case "SET_CURRENT_PLAYLIST":
      return {
        ...state,
        currentPlaylist: action.payload //playlistId
      };
    case "SET_SONGS_FOR_CURRENT_PLAYLIST":
      // console.log("action payload in reducer.js: ", action.payload);
      return {
        ...state,
        songsForPlaylist: action.payload //playlistId
      };
    case "GET_TRACKS":
      return {
        ...state,
        userTracks: action.payload
      };
    default: {
      return state;
    }
  }
}
