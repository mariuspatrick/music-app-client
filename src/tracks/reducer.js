const initialState = null;

export default function reducer(state = initialState, action = {}) {
  console.log("action.payload in tracks reducer: ", action.payload);
  switch (action.type) {
    case "TRACKS_FETCHED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
