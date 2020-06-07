class ChannelChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for "channel_chat_channel"
  end

  def speak(data)
    message = Message.create(body: data['body'], user_id: data['user_id'], messageable_type: data['messageable_type'], messageable_id: data['messageable_id'], username: data['username'])
    socket = { message: message, type: 'message' }
    ChannelChatChannel.broadcast_to("channel_chat_channel", socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
