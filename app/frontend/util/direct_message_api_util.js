export const fetchDirectMessage = directMessageId => {
  return $.ajax({
    url: `/api/direct_messages/${directMessageId}`,
    method: 'GET',
  })
};

export const createDirectMessage = directMessage => {
  return $.ajax({
    url: `/api/direct_messages/`,
    method: 'POST',
    data: { directMessage }
  })
}

export const fetchUserDirectMessages = userId => {
  return $.ajax({
    url: `/api/users/${userId}/direct_messages`,
    method: 'GET',
    data: { userId }
  })
}