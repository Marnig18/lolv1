$.(".addBTN").on("click", function(){
	var newDiv = ("<div>");
	var ing = $("#myModal$#ingredient").val().trim();
	newDiv.html(ing)
	$("#ingredients").append(newDiv)

})                              
