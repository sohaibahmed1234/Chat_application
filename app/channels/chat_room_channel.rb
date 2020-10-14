class ChatRoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)



    usert=User.find_by(id: data["current"])
    ActionCable.server.broadcast "chat_room_channel", message: data["message"],sent: usert.name
    chat_message= Chat.create!({

                                  :user_id  => data["current"],
                                  :message   => data["message"],
                                  :friend_id  => data["friend"],
                                  :name   => usert.name,
                              })
  end


end