class ChannelChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for "channel_chat_#{params[:channelId]}"
  end

  def speak(data)
    message = Message.create(body: data['body'], user_id: data['user_id'], messageable_type: data['messageable_type'], messageable_id: data['messageable_id'])
    socket = { message: message, type: 'message' }
    ChannelChatChannel.broadcast_to("channel_chat_#{params[:channelId]}", socket)
  end

  def load
    messages = Channel.includes(:messages).where(id: params[:channelId]).first.messages.collect

    socket = { messages: messages, type: 'messages' }
    ChannelChatChannel.broadcast_to("chat_channel_#{params[:channelId]}", socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
