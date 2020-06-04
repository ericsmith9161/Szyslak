class Api::UsersController < ApplicationController

  def index
    @users = User.includes(:subscribed_channels, :created_channels).all
    render :index
  end

  def create
    @user = User.new(user_params)
    username = user_params[:email].split('@')[0]
    @user.username = username
    if @user.save
      login!(@user)
      redirect_to api_user_url(@user)
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
