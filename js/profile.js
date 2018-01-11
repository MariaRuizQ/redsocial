$(document).ready(function() {
	//Para seleccionar fecha de nacimiento
	$('.datepicker').pickadate({
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 50, // Creates a dropdown of 15 years to control year,
	    today: 'Today',
	    clear: 'Clear',
	    close: 'Ok',
	    closeOnSelect: false // Close upon selecting a date,
	  });
	var ciudadOrigen = $('#ciudadOrigen');
	var fechaNacimiento = $('#fechaNacimiento');
	var btnGuardar = $('#guardar');
	var profileOk = $('.profileOk');
	var newProfile = $('.newProfile');

	btnGuardar.on('click',function(){
		localStorage.ciudadOrigen = ciudadOrigen.val();
		localStorage.fechaNacimiento = fechaNacimiento.val();
		localStorage.sexo = $('input:radio[name=group1]:checked').val();
		$('#origen').text(localStorage.ciudadOrigen);
		$('#fecNacimiento').text(localStorage.fechaNacimiento);
		$('#sexo').text(localStorage.sexo);
		profileOk.toggleClass('none');
		newProfile.toggleClass('none');
	/*
		firebase.database().ref('registro/')
		  .push({
		      nombres: $name.val(),
		      apellidos: $lastName.val(),
		      email: $email.val(),
		      password: $password.val()
		  });
	*/

	});
	//redireccionando del icon "atrás"
	var $behind = $('.behind');
	$behind.on('click',function(e){
    $(location).attr('href', 'newsfeed.html');
  });

});
