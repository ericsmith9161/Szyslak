export const fetchUsers = () => {
  return $.ajax({
    url: "/api/users",
    method: 'GET',
  })
};

export const fetchUser = userId => {
  return $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET',
  })
};

export const editUser = user => {
  return $.ajax({
    url :`/api/users/${user.id}`,
    method: 'PATCH',
    data: {user}
  })
}

export const deleteUser = userId => {
  return $.ajax({
    url: `/api/users/${userId}`,
    method: 'delete',
    data: {userId}
  })
}

export const fetchChannelUsers = channelId => {
  return $.ajax({
    url: `/api/channels/${channelId}/users`,
    method: 'GET'
  })
}