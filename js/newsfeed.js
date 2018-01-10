$(document).ready(function(){
    var textArea = $('textarea');
    var button = $('.publish-btn');
    var msg = $('#messages');

    textArea.on('input', function(event) {
        var long = $(this).val().length;
        if(long>0){
          button.attr('disabled', false);
        }else{
            button.attr('disabled', true);
        }
    });
    button.on('click', function(event){
        event.preventDefault();
        msg.prepend('<div>'+textArea.val()+'</div>').css({'background-color':'white'});
    });



});