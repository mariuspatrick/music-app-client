import { combineReducers } from "redux";
import playlistReducer from "./spotify_playlist/reducer";
import tracksReducer from "./tracks/reducer";
import signupReducer from "./signup/reducer";
import newPlaylistReducer from "./user_playlist/reducer";

export default combineReducers({
  spotifyPlaylists: playlistReducer,
  tracks: tracksReducer,
  auth: signupReducer,
  userPlaylists: newPlaylistReducer
});
