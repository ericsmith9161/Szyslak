import * as APIUtil from '../util/direct_message_api_util'

export const RECEIVE_DIRECT_MESSAGES = 'RECEIVE_DIRECT_MESSAGES';
export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE';

const receiveDirectMessages = (direct_messages) => {
  return {
    type: RECEIVE_DIRECT_MESSAGES,
    direct_messages
  }
};

export const fetchUserDirectMessages = (userId) => (dispatch) => {
  return APIUtil.fetchUserDirectMessages(userId).then(directMessages => dispatch(receiveDirectMessages(directMessages)))
}

const receiveDirectMessage = (directMessage) => {
  return {
    type: RECEIVE_DIRECT_MESSAGE,
    directMessage
  }
}

export const fetchDirectMessage = (directMessageId) => (dispatch) => {
  return APIUtil.fetchDirectMessage(directMessageId).then(directMessage => dispatch(receiveDirectMessage(directMessage)));
}

export const createDirectMessage = (directMessage) => (dispatch) => {
  return APIUtil.createDirectMessage(directMessage).then(directMessage => dispatch(receiveDirectMessage(directMessage)));
}

