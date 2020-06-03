import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER, DELETE_USER } from '../actions/user_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
    case RECEIVE_USERS:
      return action.users 
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user})
    case DELETE_USER:
      const keys = state.keys;
      let newState = {};
      for(let i = 0; i < keys.length; i++){
        if (Object.userId !== i){
          newState[i] = state[i];
        }
      }
      return newState;
    default:
      return state;
  }
}