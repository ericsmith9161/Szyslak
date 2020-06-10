import * as APIUtil from '../util/users_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const DELETE_USER = 'DELETE_USER';


const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
};

export const fetchUsers = () => (dispatch) => {
  return APIUtil.fetchUsers().then(users => dispatch(receiveUsers(users)));
}

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const fetchUser = (userId) => (dispatch) => {
  return APIUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)));
}

export const editUser = (user) => (dispatch) => {
  return APIUtil.editUser(user).then(user => dispatch(receiveUser(user)));
}

const removeUser = (userId) => {
  return {
    type: DELETE_USER,
    userId
  }
}

export const deleteUser = (userId) => (dispatch) => {
  return APIUtil.deleteUser(userId).then(user => dispatch(removeUser(user.id)))
}

export const fetchChannelUsers = (channelId) => (dispatch) => {
  return APIUtil.fetchChannelUsers(channelId).then(users => dispatch(receiveUsers(users)))
}