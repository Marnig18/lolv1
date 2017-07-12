    
    //Initialize the carousel on pageload
    $(document).ready(function(){
      $('.carousel').carousel();//Makes the carousel spin
      $('#newLordModal').modal({
      	//dismissible: let exit modal on click outside the modal
      	complete: function(data){ //after modal is complete - send the post to the server
      		alert("it worked");
      		$.post("api/newLord", function(data){
      			console.log($("username"));
      			console.log($("password"));
      		})
      		}
      	});//Pop up modal for new users

      $("form1").on("click", function(){
        event.preventDefault();
        var food = $("#ingredient");
        $.ajax({
          url: "https://api.nutritionix.com/v1_1/search/" + food + "?results=0%3A20&cal_min=125&cal_max=50000&fields=*&appId=5176df0a&appKey=+7461830ebf151da56366f14acd51751e", 
          method:"GET"}).done(function(response){
            console.log(response);
          });


    });

  });//end ready
    
   