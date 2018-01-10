$(document).ready(function() {
  $name = $('#name');
  $lastName = $('#last_name');
  $email = $('#email');
  $password = $('#password');
  $('#guardar').on('click', function(event) {
    event.preventDefault();
    console.log($name.val());
    firebase.database().ref('registro')
    .set({
        nombres: $name.val(),
        apellidos: $lastName.val(),
        email: $email.val(),
        password: $password.val()
    })
  });
});