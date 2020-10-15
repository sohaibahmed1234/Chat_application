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


      if( data.user_status=="sent" ) {
          console.log("inside condition");
          if (data.attachment) {
              // var extension = filename.split('.').pop();
              var re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
              if (re.exec(data.filename)) {
                  $('#messages').append('<p class="sent"> ' + data.message + '</p>')
                  // $('#messages').append('<p class="sent"> ' + "sent by " + data.sent + '</p>')


                  $('#messages').append('<img class="sent" src="' + data.attachment + '"width="200" height="121">')
              } else {
                  $('#messages').append('<p class="sent"> ' + data.message + '</p>')
                  // $('#messages').append('<p class="sent"> ' + "sent by " + data.sent + '</p>')
                  // console.log(data.file_url);
                  $('#messages').append('<a href=' + data.file_url + '>' + data.filename + '</a>')
              }

          } else {
              $('#messages').append('<p class="sent"> ' + data.message + '</p>')
              //  $('#messages').append('<p class="sent"> ' + "sent by " + data.sent + '</p>')
          }
      }else{
          if (data.attachment) {
              // var extension = filename.split('.').pop();
              var re = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;
              if (re.exec(data.filename)) {
                  $('#messages').append('<p class="received"> ' + data.message + '</p>')
                  // $('#messages').append('<p class="sent"> ' + "sent by " + data.sent + '</p>')


                  $('#messages').append('<img class="received" src="' + data.attachment + '"width="200" height="121">')
              } else {
                  $('#messages').append('<p class="received"> ' + data.message + '</p>')
                  // $('#messages').append('<p class="sent"> ' + "sent by " + data.sent + '</p>')
                  // console.log(data.file_url);
                  $('#messages').append('<a href=' + data.file_url + '>' + data.filename + '</a>')
              }

          } else {
              $('#messages').append('<p class="received"> ' + data.message + '</p>')
              //  $('#messages').append('<p class="sent"> ' + "sent by " + data.sent + '</p>')
          }
      }
  },


  speak(message,current_usr,friend_id,file,file_name,status) {

   console.log(file);
    this.perform('speak', { message: message , current: current_usr,friend: friend_id,attachment: file,filename: file_name,user_status: status })

  }
});

export default ChatRoomChannel;