import { combineReducers } from "redux";
import artistReducer from "../artists/reducer";

export default combineReducers({
  artist: artistReducer
});
