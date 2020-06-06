class ChannelChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
  end

    def speak(data)
    message = Message.create(body: data['message'], user_id: data['user_id'], subscribeable_type: 'Channel', subscribeable_id: data['channel_id'])
    socket = { message: message.body }
    ChannelChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
