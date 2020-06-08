json.extract! message, :id, :body, :user_id, :messageable_type, :messageable_id, :created_at
json.extract! message.user, :username

if message.user.avatar.attached?
  json.user_avatar url_for(message.user.avatar)
end