export const fetchMessages = () => {
  return $.ajax({
    url: `/api/messages`,
    method: 'GET',
  })
};

export const fetchMessage = (messageId) => {
  return $.ajax({
    url: `/api/messages/${messageId}`,
    method: 'GET',
  })
}

export const fetchChannelMessages = (channelId) => {
  return $.ajax({
    url: `api/channels/${channelId}/messages`,
    method: 'GET',
  })
}

export const fetchDirectMessageMessages = (directMessageId) => {
  return $.ajax({
    url: `api/direct_messages/${directMessageId}/messages`,
    method: 'GET',
  })
}