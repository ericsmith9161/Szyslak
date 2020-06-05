class Api::ChannelsController < ApplicationController

  def index
    if params.has_key?(:user_id)
      @channels = Channel.includes(:subscribed_users).where(user_id: params[:user_id])
    else
      @channels = Channel.includes(:subscribed_users).all
    end
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
      Subscription.create!({user_id: @channel.creator_id, subscribeable: @channel})
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])
    if (@channel.creator_id == current_user.id) && @channel.destroy
      render `/api/channels/#{Channel.find_by(name: `Main`).id}`
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :details)
  end

end