class AddMessageToChats < ActiveRecord::Migration[6.0]
  def change
    add_column :chats, :message, :string
  end
end
