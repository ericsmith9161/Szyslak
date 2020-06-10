json.extract! direct_message, :id

json.subscribed_users direct_message.subscribed_users.map{|subscribed_user| subscribed_user.id}