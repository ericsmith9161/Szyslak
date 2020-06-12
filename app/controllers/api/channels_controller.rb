class Api::ChannelsController < ApplicationController

  def index
    if params.has_key?(:user_id)
      @channels = User.includes(:subscribed_channels => [:subscribed_users]).where(id: params[:user_id]).first.subscribed_channels
    else
      @channels = Channel.includes(:subscribed_users).all
    end
    render :index
  end

  def show
    @channel = Channel.includes(:subscribed_users).find_by(id: params[:id])
    if !@channel.subscribed_users.include?(current_user)
      Subscription.create!({user_id: current_user.id, subscribeable: @channel})
    end
    render :show

  end

  def update
    @channel = Channel.find_by(id: params[:id])
    debugger
    if @channel.update(channel_params.except(:new_subs, :id, :subscribed_users))
      debugger
      if params[:channel][:new_subs]
        debugger
        params[:channel][:new_subs].each do |sub|
          Subscription.create!({user_id: sub, subscribeable: @channel})
        end
      end
      render :show 
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.creator_id = current_user.id
    if @channel.save
      Subscription.create!({user_id: @channel.creator_id, subscribeable: @channel})
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])
    id = @channel.id
    if (@channel.creator_id == current_user.id) && @channel.destroy
      render json: id 
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :details, :private, :creator_id, :topic)
  end

end