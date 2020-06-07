class Api::MessagesController < ApplicationController

  def index
    if params.has_key?(:channel_id)
      @messages = Channel.includes(:messages => [:user]).where(id: params[:channel_id]).first.messages
    else
      @messages = Message.all
    end
      render :index
  end

  def show
    @user = Message.includes(:user).find_by(id: params[:id])
    render :show
  end

end
