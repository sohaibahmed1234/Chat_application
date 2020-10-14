class HomeController < ApplicationController
  before_action :authenticate_user!
  def index

    if current_user.id = params[:id]
    @Chats=Chat.where(user_id: params[:id],friend_id:params[:friend_id])
    @Chats2=Chat.where(user_id:params[:friend_id],friend_id:params[:id])
    end
  end
  def new


  end
end
