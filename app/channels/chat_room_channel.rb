class ChatRoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)



    usert=User.find_by(id: data["current"])


    chat_message= Chat.create!({

                                  :user_id  => data["current"],
                                  :message   => data["message"],
                                  :friend_id  => data["friend"],
                                  :name   => usert.name,
                                  :attachment => data["attachment"],
                              })


    ActionCable.server.broadcast "chat_room_channel", message: data["message"],sent: usert.name,attachment: data["attachment"],filename:data["filename"],file_url:chat_message.attachment_url,user_status:data["user_status"]

  end


end