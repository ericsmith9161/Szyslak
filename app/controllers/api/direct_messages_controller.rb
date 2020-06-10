class Api::DirectMessagesController < ApplicationController

  def index
    @direct_messages = User.find_by(id: params[:user_id]).subscribed_dms
    render :index
  end

  def show
    puts "these are the params #{params}"
    @direct_message = DirectMessage.includes(:subscribed_users).find_by(id: params[:id])
    puts "BLAHBLAH"
    puts @direct_message
    render :show
  end

  def post
    @direct_message = DirectMessage.new()
    Subscription.create!({user_id: params[:current_user_id], subscribeable: @direct_message})
    params[:messagee_ids].each do |messagee_id|
      Subscription.create!({user_id: messagee_id, subscribeable: @direct_message})
    end

    render :show
  end
end
