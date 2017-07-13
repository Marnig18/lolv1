$(document).ready(function() {

  var email= $("#email");
  var password = $("#pwd");
 
  var nameInput = $("#author-name");
  var authorList = $("tbody");
  var authorContainer = $(".author-container");

  $(document).on("submit", "#author-form", handleAuthorFormSubmit);
  $(document).on("click", ".delete-author", handleDeleteButtonPress);	

  function handleAuthorLoginSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!email.val().trim().trim()) {
      return;
    }





  }






