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
	});

//codigo para que cargue la imagen
	$('.preview').hover(
    function() {
        $(this).find('a').fadeIn();
    }, function() {
        $(this).find('a').fadeOut();
    }
)

$('.file-select').on('click', function(e) {
     e.preventDefault();
	var dato = $(this).attr('datafile');
	var fileinfo = $(this).attr('datafileinfo');
	var dataimage = $(this).attr('dataimg');
    $(dato).click();
    $(dato).change(function() {
	    var file = (this.files[0].name).toString();
	    var reader = new FileReader();

	    $(fileinfo).text('');
	    $(fileinfo).text(file);

	     reader.onload = function (e) {
	         $(dataimage).attr('src', e.target.result);
		 }

	     reader.readAsDataURL(this.files[0]);
	});
	//redireccionando del icon "atrás"
	var $behind = $('.behind');
	$behind.on('click',function(e){
    $(location).attr('href', 'newsfeed.html');
  });

});
