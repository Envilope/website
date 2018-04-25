// Initialize Firebase
var config = {
	apiKey: "AIzaSyBY-95bWNWqWgJ9qWq30x9frdUgNsZO51s",
	authDomain: "envilope-token.firebaseapp.com",
	databaseURL: "https://envilope-token.firebaseio.com",
	projectId: "envilope-token",
	storageBucket: "envilope-token.appspot.com",
	messagingSenderId: "210701361373"
};
firebase.initializeApp(config);
  
var messagesRef = firebase.database().ref('email_list');

// listen to form submit
document.getElementById('sg-widget').addEventListener('submit',submitForm);

//submit form
function submitForm(e){
	e.preventDefaut();
	//get values
	var email = getInputVal('sg_email');
	//save messages
	saveMessage(email);
}

function getInputVal(id){
	return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(email){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		email: email
	});
}