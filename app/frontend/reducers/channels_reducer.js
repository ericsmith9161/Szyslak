import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, DELETE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel })
    case DELETE_CHANNEL:
      const keys = Object.keys(state);
      let newState = {};
      for (let i = 0; i < keys.length; i++) {
        if (action.channelId != keys[i]) {
          newState[keys[i]] = state[keys[i]];
        }
      }
      return newState;
    default:
      return state;
  }
}

export default channelsReducer;