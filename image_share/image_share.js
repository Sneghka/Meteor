if (Meteor.isClient){
	
	var img_data = [{
		img_src:"image1.jpg",
		img_alt:"nature"
	},
	{
		img_src:"image1.jpg",
		img_alt:"nature"
	},
	{
		img_src:"image1.jpg",
		img_alt:"nature"
	},]; //properties
	
	Template.images.helpers({images:img_data});
}

if (Meteor.isServer){
	
	console.log("I am the server");
	Meteor.startup(function(){
		// code to run on server at startup
	})
}