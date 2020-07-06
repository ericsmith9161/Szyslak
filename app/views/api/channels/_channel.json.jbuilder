json.extract! channel, :id, :name, :details, :creator_id, :topic, :created_at

json.subscribed_users channel.subscribed_users.map{|subscribed_user| subscribed_user.id}
