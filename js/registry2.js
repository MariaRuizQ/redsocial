$(document).ready(function() {
  $name = $('#name');
  $lastName = $('#last_name');
  $email = $('#email');
  $password = $('#password');
  $button = $('#guardar');

  var validateName = false;
  var validateLastname = false; 
  var validateEmail = false;
  var validatePassword = false; 

  /**  Validar todos los campos **/
  function activeButton() {
    if (validateName && validateLastname && validateEmail && validatePassword) {
      $button.attr('disabled', false);
      $button.removeClass('btn-disabled');
      $button.addClass('btn-color');
    }
  }

  function desactiveButton() {
    $button.attr('disabled', true);
    $button.removeClass('btn-color');
    $button.addClass('btn-disabled');
  } 

  $name.on('input', function() {
    if ($(this).val().length >= 3) {
      validateName = true;
      activeButton(); 
    } else {
      desactiveButton(); 
    }
  });

  $lastName.on('input', function() {
    if ($(this).val().length >= 3) {
      validateLastname = true;
      activeButton(); 
    } else {
      desactiveButton(); 
    }
  });
  $email.on('input', function(event) {
    if ($(this).val().length >= 12) {
      validateEmail = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
 
  $password.on('input', function() {
    if ($(this).val().length >= 6) {
      validatePassword = true;
      activeButton(); 
    } else {
      desactiveButton();
    }
  });

  /** Registrar con Firebase **/
  $button.on('click', function(event) {
    event.preventDefault();
    firebase.database().ref('registro')
    .set({
        nombres: $name.val(),
        apellidos: $lastName.val(),
        email: $email.val(),
        password: $password.val()
    });  
    alert('Se guardo exitosamente datos');
    $(location).attr('href', 'newsfeed.html');
  });
  
});