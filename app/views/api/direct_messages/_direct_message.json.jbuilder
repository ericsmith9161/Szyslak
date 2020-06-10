json.extract! direct_message, :id

json.subscribed_users direct_message.subscribed_users.map{|subscribed_user| subscribed_user.id}



json.other_user_usernames direct_message.subscribed_users.map{|subscribed_user| subscribed_user.username}.select{|username| username != current_user.username}