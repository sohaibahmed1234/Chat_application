class ChatController < ApplicationController
  before_action :authenticate_user!
  def index
    @users=User.all
    # @users = User.find_by(id: current_user.id)
  end

end
