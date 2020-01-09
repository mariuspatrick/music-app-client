const initialState = null;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ARTIST_FETCH_SUCCES": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
