import * as APIUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const DELETE_CHANNEL = 'DELETE_CHANNEL';
export const RECEIVE_CHANNEL_USERS = 'RECEIVE_CHANNEL_USERS';

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

const receiveChannelUsers = (users) => {
  return {
    type: RECEIVE_CHANNEL_USERS,
    users
  }
}

export const fetchChannelUsers = (channelId) => (dispatch) => {
  return APIUtil.fetchChannelUsers(channelId).then(users => dispatch(receiveChannelUsers(users)))
}