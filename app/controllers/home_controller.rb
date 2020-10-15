class HomeController < ApplicationController
  before_action :authenticate_user!
  def index


    if current_user.id = params[:id]
      if current_user.status?
        @Chats=Chat.where(user_id: params[:id],friend_id:params[:friend_id])
        @Chats2=Chat.where(user_id:params[:friend_id],friend_id:params[:id])


      else

        user=User.find_by(id: params[:friend_id])
        if user.sent?

          current_user.received!
          @Chats=Chat.where(user_id: params[:id],friend_id:params[:friend_id])
          @Chats2=Chat.where(user_id:params[:friend_id],friend_id:params[:id])
        else
          current_user.sent!
          @Chats=Chat.where(user_id: params[:id],friend_id:params[:friend_id])
          @Chats2=Chat.where(user_id:params[:friend_id],friend_id:params[:id])
            end




      end

    end
  end
  def new

    @chat=Chat.new

  end
  def create
    @chat = Chat.new(resume_params)
    if @chat.save
      redirect_to chat_path, notice: "The filehas been uploaded."
      end
  end


  def resume_params
    params.require(:chat).permit(:attachment)
  end

end
