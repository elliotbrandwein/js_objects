function Thing(input,howMany)
{
	this.name=input;
	this.amount=howMany
	this.message= function()
	{
		alert(name);
	}
}
var x = new Thing("hi",2);
Thing.prototype.newMessage = function(){
	console.log("this is the new method being used");
}
jQuery(document).ready(function($) {
  $("lorem").on("click",function(){
    $("first").animate({left: '250px'});
    alert("thing");
	}); 
});



