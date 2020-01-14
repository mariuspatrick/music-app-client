import { combineReducers } from "redux";
import playlistReducer from "./playlist/reducer";
import tracksReducer from "./tracks/reducer";
import signupReducer from "./signup/reducer";
import newPlaylistReducer from "./user_playlist/reducer";

export default combineReducers({
  playlist: playlistReducer,
  tracks: tracksReducer,
  auth: signupReducer,
  newPlaylist: newPlaylistReducer
});
