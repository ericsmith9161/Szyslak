class Api::MessagesController < ApplicationController

  def index
    if params.has_key?(:channel_id)
      @messages = Channel.includes(:messages => [:user]).where(id: params[:channel_id]).first.messages
    elsif params.has_key?(:direct_message_id)
      @messages = DirectMessage.includes(:messages => [:user]).where(id: params[:direct_message_id]).first.messages
    else
      @messages = Message.all
    end
      render :index
  end

  def show
    @user = Message.includes(:user).find_by(id: params[:id])
    render :show
  end

  def update
    @message = Message.find_by(id: params[:id])
    if (current_user.id == @message.user_id) && @message.update(message_params.except(:channel_id))
      render :show 
    else
      render json: @message.errors.full_messages, status: 401
    end
  end

  def destroy
    @message = Message.find_by(id: params[:id])
    id = @message.id
    if (@message.user_id == current_user.id) && @message.destroy
      render json: id 
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:body, :username, :messageable_type, :messageable_id, :channel_id, :user_id)
  end
end
