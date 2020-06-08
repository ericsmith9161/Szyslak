json.extract! user, :id, :username, :email

json.subscribed_channels user.subscribed_channels.map{|subscribed_channel| subscribed_channel.id}
json.created_channels user.created_channels.map{|created_channel| created_channel.id}

json.avatarURL url_for(user.avatar)
