$(document).ready(function() {
    
  // login
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#sesionGoogle').on('click',function(event) {
    event.preventDefault();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      
    });
  });
});