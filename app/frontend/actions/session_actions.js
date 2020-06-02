import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON
  }
}

export const signup = (user) => (dispatch) => APIUtil.signup(user)
  .then((user) => dispatch(receiveCurrentUser(user)), resp => dispatch(receiveErrors(resp)));

export const login = (user) => (dispatch) => APIUtil.login(user)
  .then( (currentUser) => dispatch(receiveCurrentUser(currentUser)), resp => dispatch(receiveErrors(resp)));

export const logout = () => (dispatch) => APIUtil.logout()
  .then(() => dispatch(logoutCurrentUser()), resp => dispatch(receiveErrors(resp)));