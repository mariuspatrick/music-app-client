const initialState = {
  jwt: null,
  name: null,
  email: null,
  id: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "USER_SIGN_UP": {
      return {
        ...state,
        jwt: action.payload.jwt,
        name: action.payload.name,
        id: action.payload.id
      };
    }
    case "USER_LOGGED_OUT": {
      localStorage.setItem("jwt", "");
      localStorage.setItem("name", "");
      localStorage.setItem("id", "");

      return {
        ...state,
        jwt: null,
        name: null,
        id: null
      };
    }
    case "USER_LOGGED_IN": {
      return {
        ...state,
        jwt: action.payload.jwt,
        name: action.payload.name,
        id: action.payload.id
      };
    }
    default: {
      return state;
    }
  }
}
