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
        var structure = '<div class="col s2 center-align">'+
                          '<img src="../assets/images/profile_pic.jpg" alt="" class="circle responsive-img">'+
                          '</div>'+
                          '<div class="container backgroundMsg">'+
                          '<div class="row">'+
                           '<div class="offset-s1 col s10">'+
                            '<p>'+textArea.val()+'</p>'+
                            '<p>'+moment().format('LT')+'</p>'+
                            '</div>'+
                          '</div>'+
                        '</div>';  
        console.log("Sss");
       msg.prepend(structure);
       textArea.val('');
    });

});