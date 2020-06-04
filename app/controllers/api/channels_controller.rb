class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.includes(:subscribed_users).all
    render :index
  end

  def show
    @channel = Channel.includes(:subscribed_users).find_by(id: params[:id])
    render :show
  end

  def create
    @channel = Channel.new(user_params)
    @channel.creator_id = current_user
    if @channel.save
      redirect_to api_channel_url(@channel)
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])
    if (@channel.creator_id == current_user.id) && @channel.destroy
      redirect_to api_channel_url(Channel.find_by(name: 'Main'))
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :details)
  end

end