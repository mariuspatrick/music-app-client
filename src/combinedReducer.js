import { combineReducers } from "redux";
import playlistReducer from "./playlist/reducer";
import tracksReducer from "./tracks/reducer";

export default combineReducers({
  playlist: playlistReducer,
  tracks: tracksReducer
});
