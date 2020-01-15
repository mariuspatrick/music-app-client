const initialState = {
  currentPlaylist: null,
  songsForPlaylist: [],
  allUsersPlaylists: []
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
      return {
        ...state,
        songsForPlaylist: action.payload //playlistId
      };
    default: {
      return state;
    }
  }
}
