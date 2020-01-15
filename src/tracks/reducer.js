const initialState = null;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SPOTIFY_TRACKS_FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
