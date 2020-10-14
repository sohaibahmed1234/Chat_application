class AddFriendToChats < ActiveRecord::Migration[6.0]
  def change
    add_column :chats, :friend_id, :integer
  end
end
