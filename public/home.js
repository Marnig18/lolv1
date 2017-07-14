$(document).ready(function() {
// var db = require('../models/meal.js');
var recipeName;

var counter=1;

$('.foodItem').each(function() {
  recipeName = $(this).text();
  console.log("First recipeName" + recipeName);
  $.ajax({
      url: "https://api.tenor.com/v1/search?key=LIVDSRZULELA&tag=" + recipeName + "+recipe&locale=en_US&safesearch=strict",
      method: "GET"
  }).done(function(response){
      console.log("Recipe Name" + recipeName);
      var recipeDiv = $('<div>');
      recipeDiv.html("Recipe " + counter);
      counter++;
      $('#addGif').append(recipeDiv);
      var data = response;
      console.log(data);
      var gif = data.results[1].media[0].gif.url;
      var theRecipeGif = $('<img src =' + gif + '>');
      theRecipeGif.attr('style', 'border-bottom: 2px solid #EEE')
      $('#addGif').append(theRecipeGif);
      $('#addGif').append('\r\n');
  });
});

 
  // var nameInput = $("#author-name");
  // var authorList = $("tbody");
  // var authorContainer = $(".author-container");

  // $(document).on("submit", "#author-form", handleAuthorFormSubmit);
  // $(document).on("click", ".delete-author", handleDeleteButtonPress);	

  // function handleAuthorLoginSubmit(event) {
  //   event.preventDefault();
  //   // Don't do anything if the name fields hasn't been filled out
  //   if (!email.val().trim().trim()) {
  //     return;
  //   }

  // function postUser() {
  //   $.post("/api/users", function(data) {
  //     db.User.create({}).then(function(data){
  //     	console.log(data)
  //     })

  //     })
     
   
  // }

  // }



// $(document).ready(function() {
// 	$("#signInSubmit").on("click", function(err){
// 		event.preventDefault();
// 		var email  = $("#email").val();
// 		console.log(email)
// 		var password = $("#pwd").val();
// 		console.log(password)



//       // $.get("/userpage/" + email, function(req, res) {
//       //   // console.log(data);
//       //   res.render("input")



// 	});
		
// 	});


// });












