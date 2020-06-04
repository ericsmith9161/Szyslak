class Api::UsersController < ApplicationController

  def index
    if params.has_key?(:channel_id)
      @users = User.includes(:subscribed_channels, :created_channels).where(channel_id: params[:channel_id])
    else
      @users = User.includes(:subscribed_channels, :created_channels).all
    end
      render :index
  end

  def create
    @user = User.new(user_params)
    username = user_params[:email].split('@')[0]
    @user.username = username
    if @user.save
      login!(@user)
      puts Channel.all
      Subscription.create!({user_id: @user.id, subscribeable: Channel.find_by(name: 'Main')})
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.includes(:subscribed_channels, :created_channels).find_by(id: params[:id])
    render :show
  end

  private

  def user_params 
    params.require(:user).permit(:email, :password, :username)
  end

end
