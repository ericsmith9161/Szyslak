class ChannelChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    if params.has_key?(:channel_id)
      @channel = Channel.find_by(id: params[:channel_id])
      stream_for @channel if @channel
    else 
      @dm = DirectMessage.find_by(id: params[:direct_message_id])
      stream_for @dm if @dm
    end
  end

  def speak(data)
    message = Message.create(body: data['body'], user_id: data['user_id'], messageable_type: data['messageable_type'], messageable_id: data['messageable_id'], username: data['username'])
    socket = { message: message, type: 'message' }
    ChannelChatChannel.broadcast_to(@channel || @dm, socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
