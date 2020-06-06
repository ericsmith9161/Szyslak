class ChannelChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for "channel_chat_#{params[:channelId]}"
  end

  def speak(data)
    message = Message.create(body: data['message'], user_id: data['user_id'], subscribeable_type: 'Channel', subscribeable_id: data['channel_id'])
    socket = { `#{message.id}`: message }
    ChannelChatChannel.broadcast_to("channel_chat_#{params[:channelId]}", socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
