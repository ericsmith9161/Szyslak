class Api::ChannelsController < ApplicationController

  def index
    @channels = Channel.includes(:subscribed_users).all
  end

  def show
  end

  def create
  end

  def destroy
  end

  private

  def channel_params
  end

end

# include associations in controller when fetching
# 