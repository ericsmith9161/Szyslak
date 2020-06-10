class Api::UsersController < ApplicationController

  def index
    if params.has_key?(:channel_id)
      @users = Channel.includes(:subscribed_users => [:subscribed_channels, :created_channels, :subscribed_dms]).where(id: params[:channel_id]).first.subscribed_users
    else
      @users = User.includes(:subscribed_channels, :created_channels, :subscribed_dms).all
    end
      render :index
  end

  def create
    @user = User.new(user_params)
    username = user_params[:email].split('@')[0]
    @user.username = username
    if @user.save
      login!(@user)
      Subscription.create!({user_id: @user.id, subscribeable: Channel.find_by(name: 'Main')})
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.includes(:subscribed_channels, :created_channels, :subscribed_dms).find_by(id: params[:id])
    render :show
  end

  private

  def user_params 
    params.require(:user).permit(:email, :password, :username, :avatar)
  end

end
