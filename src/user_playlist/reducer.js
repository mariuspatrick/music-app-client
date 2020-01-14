const initialState = null;

export default function reducer(state = initialState, action) {
  //console.log("action.payload in addEvents reducer", action.payload);
  switch (action.type) {
    case "CREATE_NEW_PLAYLIST": {
      return { ...state, playlist: action.payload };
    }
    default: {
      return state;
    }
  }
}
