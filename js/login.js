$( document ).ready(function(){
	var $email = $('#email');
	var $password = $('#password');

	$email.on('input', function(){
		firebase.database().ref('registro')
		.on('child_added', function(s){
		var user = s.val();
		if(user.email == $email.val() && user.password == $password.val()){
		  console.log("lalll");
		  $('#login').attr('disabled',false);
		}
	})
	});
	$password.on('input', function(){
		firebase.database().ref('registro')
		.on('child_added', function(s){
		var user = s.val();
		if(user.email == $email.val() && user.password == $password.val()){
		  $('#login').attr('disabled',false);
		}
	})
	});
	$('#login').on('click', function(){
		localStorage.email = $email.val();
		localStorage.password = $password.val();
	})
})
