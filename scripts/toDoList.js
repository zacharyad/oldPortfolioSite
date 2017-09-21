//check off specific to-do's by clicking
$("ul").on("click", "li", function(){
	//adds a class that is specified in css and applied as a visual representation of completed
	$(this).toggleClass("completed");
})

// click "X" will delete the item, i.e. trashcan. 
//This is click-listening for the ul, but specifically the spans within (child).
$("ul").on("click", "span", function(event){
	//"this" being the child within the parent. Calling the fadeout time, with the function to completely remove the li.
	$(this).parent().fadeOut(500, function(){
		//Now the li is being com,pletely removed, not just set to display: block;
		$(this).remove();
	});
	//This stops the bubbling from the span all the way to the body/html
	event.stopPropagation();

})

//Adding a typed item. this listens for any key press

$("#typeAdd").keypress(function(event){
	//listening to, specifically the "enter Key" (13) to be pressed.
	if(event.which === 13){
		//this stores the typed input
		var todoText = $(this).val();
		//this restores the text field to normal
		$(this).val("");
		//this creates the li to be placed in the ul
		$("ul").append("<li><span><i class=\"fa fa-minus-square-o\" aria-hidden=\"true\"></i></span>" + todoText + "</li>");

	} 
});

//This will toggle the text input
$(".fa-plus-square").click(function(){
	$("#typeAdd").fadeToggle();
})
