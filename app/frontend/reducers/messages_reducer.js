import {RECEIVE_MESSAGES, RECEIVE_MESSAGE, DELETE_MESSAGE} from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_MESSAGES:
      return action.messages 
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, { [action.message.id]: action.message})
    case DELETE_MESSAGE:
      const keys = Object.keys(state);
      let newState = {};
      for (let i = 0; i < keys.length; i++) {
        if (action.messageId != keys[i]) {
          newState[keys[i]] = state[keys[i]];
        }
      }
      return newState;
    default:
      return state;
  }
}

export default messagesReducer;