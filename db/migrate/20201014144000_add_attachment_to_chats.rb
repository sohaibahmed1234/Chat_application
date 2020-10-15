class AddAttachmentToChats < ActiveRecord::Migration[6.0]
  def change
    add_column :chats, :attachment, :string
  end
end
