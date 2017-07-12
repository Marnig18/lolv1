


    //Initialize the carousel on pageload
    $(document).ready(function() {
        $('#newLordModal').modal({
            //dismissible: let exit modal on click outside the modal
            complete: function(data) { //after modal is complete - send the post to the server
                alert("it worked");
                $.post("api/newLord", function(data) {
                    console.log($("username"));
                    console.log($("password"));
                })
            }
        }); //Pop up modal for new users

        $("searchNutrix").on("click", function() {
            event.preventDefault();
            var food = $("#ingredient");
            $.ajax({
                url: "https://api.nutritionix.com/v1_1/search/" + food + "?results=0%3A20&cal_min=125&cal_max=50000&fields=*&appId=5176df0a&appKey=+7461830ebf151da56366f14acd51751e",
                method: "GET"
            }).done(function(response) {
                console.log(response);
            });


        });

        $(".meal").on("submit", function(){
          event.preventDefault();
         var meal = $("#mealName").val();
          console.log(meal);
         $.ajax({
          url:"https://api.nutritionix.com/v1_1/search/" + meal + "?results=0%3A20&cal_min=125&cal_max=50000&fields=*&appId=5176df0a&appKey=+7461830ebf151da56366f14acd51751e",
          type: "GET",
          dataType : "html" //this specification allows the response to be parsed allowing the nested information to be declared into usable forms.
        }).done(function(response){
          var parseResponse = JSON.parse(response);
           console.log(parseResponse);
          console.log(parseResponse.hits[0].fields);
          console.log("Name: " + parseResponse.hits[0].fields.item_name);
          console.log("Calories: " + parseResponse.hits[0].fields.nf_calories);
          console.log("Calories from fat: " + parseResponse.hits[0].fields.nf_calories_from_fat);
          console.log("Total Fat: " + parseResponse.hits[0].fields.nf_total_fat);
          console.log("Dietary Fiber: " + parseResponse.hits[0].fields.nf_dietary_fiber);
          console.log("Sugars: " + parseResponse.hits[0].fields.nf_sugars);
          console.log("Total Carbohydrates: " + parseResponse.hits[0].fields.nf_total_carbohydrate);     
          console.log("Sodium: " + parseResponse.hits[0].fields.nf_sodium);
          }); 

        });

        $("#newMeal").on("submit", function(){
          var meal_name = $("#mealName").val();
          var ingredient1 = $("#ingredient1").val();
          var ingredient2 = $("#ingredient2").val();
          var ingredient3 = $("#ingredient3").val();
          console.log(meal_name);
          console.log(ingredient1);
          console.log(ingredient2);
          console.log(ingredient3);
          });
    }); //end ready