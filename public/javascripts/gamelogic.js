var socket = io();
$('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});

socket.on('message',function(msg){
    console.log(msg);
    $('#chat-box').append(`<p>${msg}</p>`);
})
