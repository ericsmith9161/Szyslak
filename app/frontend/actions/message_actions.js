import * as APIUtil from '../util/message_api_util'

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  }
}

export const fetchMessages = () => (dispatch) => {
  return APIUtil.fetchMessages().then(messages => dispatch(receiveMessages(messages)));
}

const receiveMessage = (message) => {
  return {
    type: RECEIVE_CHANNEL,
    message
  }
}

export const fetchMessage = (messageId) => (dispatch) => {
  return APIUtil.fetchMessage(messageId).then(message => dispatch(receiveMessage(message)));
}

export const fetchChannelMessages = (channelId) => (dispatch) => {
  return APIUtil.fetchChannelMessages(channelId).then(messages => dispatch(receiveMessages(messages)))
}