// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.



require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("jquery")
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import ChatRoomChannel from "../channels/chat_room_channel";

$(document).on('turbolinks:load', function () {
    $("#send_message").on('submit', function(e){
        e.preventDefault();
        let message = $('#message').val();
         let current_usr=$('#current_user').val();
        let friend_id=$('#friend').val();
        let file=$('#myfile').get(0).files.length
        let user_status1=$('#user_status').val();
        //console.log(current_usr);
       // console.log(user_status1);

        // if $new_message_attachment.get(0).files.length > 0

        if (file>0) {
            var reader = new FileReader()
            let file_name = $('#myfile').get(0).files[0].name


            // reader.readAsDataURL, $('#myfile').get(0).files[0]
            reader.onload = function (e) {
                var dataURL = reader.result;
                ChatRoomChannel.speak(message, current_usr, friend_id, dataURL,file_name,user_status1);
                $('#myfile').val('')
               // console.log(dataURL);
            }
            $('#message').val('')
            //  reader.readAsDataURL(file);
            reader.readAsDataURL($('#myfile').get(0).files[0])
        }else{
            if (message.length > 0) {
                ChatRoomChannel.speak(message, current_usr, friend_id, null, null, user_status1);
                $('#message').val('')
            }
        }

       // ChatRoomChannel.speak(message,current_usr,friend_id,reader.result);
       // console.log(reader.readAsDataURL, $('#myfile').get(0).files[0]);
        if (message.length > 0) {
            console.log(message)

           // ChatRoomChannel.speak(message,current_usr,friend_id,reader.result);


        }
    });


    $('#messages').stop().animate({ scrollTop: $('#messages')[0].scrollHeight}, 1000);

})


