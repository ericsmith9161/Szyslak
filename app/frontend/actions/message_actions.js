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

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  }
}

export const fetchMessage = (messageId) => (dispatch) => {
  return APIUtil.fetchMessage(messageId).then(message => dispatch(receiveMessage(message)));
}

export const fetchChannelMessages = (channelId) => (dispatch) => {
  return APIUtil.fetchChannelMessages(channelId).then(messages => dispatch(receiveMessages(messages)))
}

export const fetchDirectMessageMessages = (directMessageId) => (dispatch) => {
  return APIUtil.fetchDirectMessageMessages(directMessageId).then(messages => dispatch(receiveMessages(messages)))
}