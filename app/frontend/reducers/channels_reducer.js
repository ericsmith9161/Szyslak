import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, DELETE_CHANNEL } from '../actions/user_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel })
    case DELETE_CHANNEL:
      const keys = state.keys;
      let newState = {};
      for (let i = 0; i < keys.length; i++) {
        if (Object.channelId !== i) {
          newState[i] = state[i];
        }
      }
      return newState;
    default:
      return state;
  }
}

export default channelsReducer;