json.extract! channel, :id, :name, :details, :creator_id, :topic

json.subscribed_users channel.subscribed_users.map{|subscribed_user| subscribed_user.id}
