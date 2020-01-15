const initialState = null;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "PLAYLIST_FETCH_SUCCES": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
