import consumer from "./consumer"

const ChatRoomChannel = consumer.subscriptions.create("ChatRoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the chat room!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {

    $('#messages').append('<p class="received"> ' + data.message + '</p>')
    $('#messages').append('<p class="sent"> ' +"sent by "+ data.sent + '</p>')

  },

  speak(message,current_usr,friend_id) {


    this.perform('speak', { message: message , current: current_usr,friend: friend_id})

  }
});

export default ChatRoomChannel;