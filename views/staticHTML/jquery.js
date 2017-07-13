
// $(document).ready(function(){  
//     $('#myModal')
// })
// $(document).ready(function(){  
//     $('#myModal').modal('show'); 
// })

$("#myModal").on("click", function(){
	$("myModal").modal('show'); 
})
$("#navSignUp").on("click", function(){
	$("navSignUp").modal('show'); 
})

$("#navSignUp").on("click", function(){
	$("navSignUp").modal('show'); 
})

$("#myModal4 .addIngred").click(function() {
    event.preventDefault();
    var ingredient = $("#myModal4 .ingredient").val();
    console.log("ingredient: " + ingredient);
   
    // console.log("this shit doesn't happen");
})