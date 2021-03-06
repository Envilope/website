// Initialize Firebase
var config = {
	apiKey: "AIzaSyCam3_FZiFUpfJU48MbxfyqcNYz-jmvy5w",
	authDomain: "cryptobase-192312.firebaseapp.com",
	databaseURL: "https://cryptobase-192312.firebaseio.com",
	projectId: "cryptobase-192312",
	storageBucket: "cryptobase-192312.appspot.com",
	messagingSenderId: "17310601752"
};
firebase.initializeApp(config);
  
var messagesRef = firebase.database().ref('email_list');

// listen to form submit
document.getElementById('sg-widget').addEventListener('submit', submitForm);
document.getElementById('sg-widget-1').addEventListener('submit', submitForm1);

//submit form
function submitForm(e){
	e.preventDefault();
	//get values
	var email = getInputVal('sg_email');
	//save messages
	saveMessage(email);
	// show alert error
	document.querySelector('#sub').style.display = 'block';
	//hide alert after 3 seconds
	setTimeout(function(){
		document.querySelector('#sub').style.display = 'none';
	},3000);
}

function submitForm1(f){
	f.preventDefault();
	//get values
	var email = getInputVal('sg_email_1');
	//save messages
	saveMessage(email);
	// show alert error
	document.querySelector('#sub-1').style.display = 'block';
	//hide alert after 3 seconds
	setTimeout(function(){
		document.querySelector('#sub-1').style.display = 'none';
	},3000);
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

