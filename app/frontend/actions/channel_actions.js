import * as APIUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';

const receiveChannels = (channels) => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  }
};

export const fetchChannels = () => (dispatch) => {
  return APIUtil.fetchChannels().then(channels => dispatch(receiveChannels(channels)));
}

const receiveChannel = (channel) => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  }
}

export const fetchChannel = (channelId) => (dispatch) => {
  return APIUtil.fetchChannel(channelId).then(channel => dispatch(receiveChannel(channel)));
}

export const createChannel = (channel) => (dispatch) => {
  return APIUtil.createChannel(channel).then(channel => dispatch(receiveChannel(channel)));
}

const removeChannel = (channelId) => {
  return {
    type: DELETE_CHANNEL,
    channelId
  }
}

export const deleteChannel = (channelId) => (dispatch) => {
  return APIUtil.deleteChannel(channelId).then(channel => dispatch(removeChannel(channel.id)))
}

export const fetchUserChannels = (userId) => (dispatch) => {
  return APIUtil.fetchUserChannels(userId).then(channels => dispatch(receiveChannels(channels)))
}