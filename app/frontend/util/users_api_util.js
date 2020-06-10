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

export const editUser = (user)=> {
  debugger
  return $.ajax({
    url: `/api/users/${user.get("user[id]")}`,
    method: 'PATCH',
    data: user,
    contentType: false,
    processData: false
  });
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