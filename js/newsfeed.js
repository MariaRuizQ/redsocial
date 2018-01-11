$(document).ready(function(){
    var textArea = $('textarea');
    var button = $('.publish-btn');
    var msg = $('#messages');

    textArea.on('input', function(event) {
        var long = $(this).val().length;
        if(long>0){
          button.removeAttr('disabled');
        }else{
            button.addAttr('disabled');
        }
    });
    button.on('click', function(event){
        event.preventDefault();
        var nameUser = '';
        firebase.database().ref('registro')
          .on('child_added', function(s){
          var user = s.val();
          if(localStorage.email == user.email){
            nameUser = user.nombres + ' '+user.apellidos;
          }
        });
        var structure = '<div class="cont-post"><div class="col s2 center-align">'+
                          '<img src="../assets/images/profile_pic.jpg" alt="" class="circle responsive-img">'+
                          '</div>'+
                          '<span>'+nameUser+'</span>'+
                          '<div class="cont-post container backgroundMsg">'+
                          '<div class="row">'+
                           '<div class="offset-s1 col s10">'+
                            '<p class="post">'+textArea.val()+'</p>'+
                            '<p>'+moment().format('LT')+'</p>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+'</div>';
       msg.prepend(structure);
       textArea.val('');
    });
});
