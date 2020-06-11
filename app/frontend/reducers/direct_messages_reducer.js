import { RECEIVE_DIRECT_MESSAGES, RECEIVE_DIRECT_MESSAGE } from '../actions/direct_message_actions';

const directMessagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_DIRECT_MESSAGES:
      return action.direct_messages
    case RECEIVE_DIRECT_MESSAGE:
      return Object.assign({}, state, { [action.directMessage.id]: action.directMessage })
    default:
      return state;
  }
}

export default directMessagesReducer;