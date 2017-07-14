
var counter = 0;
var nextCals;

var totCal = 0;
var calFat = 0;
var satFat = 0;
var tranFat = 0;
var totalFats = 0;
var cholesterol = 0;
var totalSodium = 0;
var tCarbs = 0;
var dietFiber = 0;
var totalSugars = 0;
var totalProtein = 0;
var x = 0;
$("#myModal4 .btn").on("click", function() {
    event.preventDefault();
    ++counter;
    //increment counter and check to see if ingredients isn't greater than 10.
    if (counter > 10) {
        alert("Sorry, Your Overlord can only support Ten Ingredients at this time!");
        return
    };
    //save variable ing as ingredient value
    var ing = $("#myModal4 #ingredient").val().trim();
    //alert("OK");

    //build table row.
    var newRow = $("<tr></tr>");
    var newData = $("<td></td>");
    //declare <td> for ingredient.
    // var nextIng = newData.append(ing); 

    //build form for Post.    
    var hiddenInput = $("<input value='" + ing + "' type='hidden' name='ingredient" + counter + "'> ");

    //YOU CANT APPEND THE ROW UNTIL ITS FULL.

    $("#recipe").append(hiddenInput);
    console.log($("#recipe").val());

    $.ajax({
        url: "https://api.nutritionix.com/v1_1/search/" + ing + "?results=0%3A20&cal_min=125&cal_max=50000&fields=*&appId=5176df0a&appKey=+7461830ebf151da56366f14acd51751e",
        type: "GET",
        dataType: "html" //this specification allows the response to be parsed allowing the nested information to be declared into usable forms.
    }).done(function(response) {
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
        console.log("Protein: " + parseResponse.hits[0].fields.nf_protein);

        //declare <td>'s 
        var nextCals = parseResponse.hits[0].fields.nf_calories;
        var nextCarbs = parseResponse.hits[0].fields.nf_total_carbohydrate;
        var nextFats = parseResponse.hits[0].fields.nf_total_fat;
        var nextProtein = parseResponse.hits[0].fields.nf_protein;
        newRow.append($("<td>" + ing + "</td>"));
        newRow.append($("<td>" + nextCals + "</td>"));
        newRow.append($("<td>" + nextCarbs + "</td>"));
        newRow.append($("<td>" + nextFats + "</td>"));
        newRow.append($("<td>" + nextProtein + "</td>"));
        console.log(typeof tranFat);
        console.log(tranFat);
        totCal += parseInt(parseResponse.hits[0].fields.nf_calories);
        calFat += parseInt(parseResponse.hits[0].fields.nf_calories_from_fat);
        satFat += parseInt(parseResponse.hits[0].fields.nf_saturated_fat);
        // if (typeof tranFat === "number") {
        //     tranFat += parseInt(parseResponse.hits[0].fields.nf_trans_fatty_acid);
        // } this kept on breaking everything because it kept coming back null so we just won't worry about it.
        totalFats += parseInt(parseResponse.hits[0].fields.nf_total_fat);
        cholesterol += parseInt(parseResponse.hits[0].fields.nf_cholesterol);
        totalSodium += parseInt(parseResponse.hits[0].fields.nf_sodium);
        tCarbs += parseInt(parseResponse.hits[0].fields.nf_total_carbohydrate);
        dietFiber += parseInt(parseResponse.hits[0].fields.nf_dietary_fiber);
        totalSugars += parseInt(parseResponse.hits[0].fields.nf_sugars);
        totalProtein += parseInt(parseResponse.hits[0].fields.nf_protein);


        console.log(totCal);
        console.log(tCarbs);
        console.log(totalFats);
        console.log(totalSugars);
        $("#totCals").html(totCal);
        $("#totalFatsCals").html(calFat);
        $("#totalFats").html(totalFats);
        $("#satFats").html(satFat);
        $("#transFats").html(tranFat);
        $("#totalCholesterol").html(cholesterol);
        $("#totalSodiums").html(totalSodium);
        $("#totalCarbos").html(tCarbs);
        $("#totalFibers").html(dietFiber);
        $("#totalSugarsx").html(totalSugars);
        $("#totalProteinsx").html(nextProtein);


        $("#totalCarbs").html(tCarbs);
        $("#totalFat").html(totalFats);
        $("#totalProteins").html(totalProtein);
        $("#totalSodium").html(totalSodium);
        $("#totalSugars").html(totalSugars);
        $("#totalProteins").html(totalProtein);

        $("#totals");





        $("#ingredTable").append(newRow);
    }); //END AJAX CALL



    //HIDE THE MODAL AND RESET ING VALUE    
    $("#myModal4").modal("hide");
    $("#myModal4 #ingredient").val("");
}); //END ADD INGREDIENT



$("#saveRecipe").on("click", function() {
    //alert("ok");

    var recipeName = $("#recipeName").val();
    var routeName = recipeName.replace(/ /g, "_");
    console.log(recipeName + "\n" + routeName);


    $.post("/input", function(data) {

    });



});

$(".meal").on("submit", function() {
    event.preventDefault();
    var meal = $("#mealName").val();
    console.log(meal);
    $.ajax({
        url: "https://api.nutritionix.com/v1_1/search/" + meal + "?results=0%3A20&cal_min=125&cal_max=50000&fields=*&appId=5176df0a&appKey=+7461830ebf151da56366f14acd51751e",
        type: "GET",
        dataType: "html" //this specification allows the response to be parsed allowing the nested information to be declared into usable forms.
    }).done(function(response) {
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

