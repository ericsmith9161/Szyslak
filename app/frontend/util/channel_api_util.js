export const fetchChannels = () => {
  return $.ajax({
    url: "/api/channels",
    method: 'GET',
  })
};

export const fetchChannel = channelId => {
  return $.ajax({
    url: `/api/channels/${channelId}`,
    method: 'GET',
  })
};

export const createChannel = channel => {
  return $.ajax({
    url: `/api/channels/`,
    method: 'POST',
    data: { channel }
  })
}

export const editChannel = channel => {
  return $.ajax({
    url: `/api/channels/${channel.id}`,
    method: 'PATCH',
    data: { channel }
  })
}

export const deleteChannel = channelId => {
  return $.ajax({
    url: `/api/channels/${channelId}`,
    method: 'DELETE',
    data: { channelId }
  })
}

export const fetchUserChannels = userId => {
  return $.ajax({
    url: `/api/users/${userId}/channels`,
    method: 'GET'
  })
}