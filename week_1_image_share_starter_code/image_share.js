if (Meteor.isClient){
	
console.log("I am the client");
}

if (Meteor.isServer){
	
	console.log("I am the server");
	Meteor.startup(function(){
		// code to run on server at startup
	})
}