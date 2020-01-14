import api from "../api";

export function userLoggedIn(jwt, name, id) {
  return {
    type: "USER_LOGGED_IN",
    payload: { jwt, name, id }
  };
}

export function login(email, password) {
  return function thunk(dispatch, getState) {
    api("/login", {
      method: "POST",
      body: {
        email: email,
        password: password
      }
    })
      .then(data => {
        dispatch(userLoggedIn(data.jwt, data.name, data.id));
      })
      .catch(err => console.log("Error!", err));
  };
}

export function signUpSuccess(jwt, name, email, id) {
  return {
    type: "USER_SIGN_UP",
    payload: { jwt, name, email, id }
  };
}

export function signUp(email, name, password) {
  return function thunk(dispatch, getState) {
    api("/signup", {
      method: "POST",
      body: {
        name: name,
        email: email,
        password: password
      }
    })
      .then(data => {
        const action = signUpSuccess(data.jwt, data.name, data.email, data.id);
        dispatch(action);
      })
      .catch(err => console.log("err", err));
  };
}
