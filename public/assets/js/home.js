$(document).ready(function() {
	$("#navSignIn").on("click", function() {
    $("#myModal").modal('show');
});

$("#navSignUp").on("click", function() {
    $("navSignUp").modal('show');
});
$("#registration_modal #useremail").val().trim()

var loginForm = $("form.login");
var loginName = $("#myModal input#email").val();
var password = $("#myModal input#pwd").val();
$(document).on("submit", "form.login", function() {
        event.preventDefault();
        console.log(loginName);
        console.log(password);
        var userData = {
            username: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };
    });
    // db.User.findOne({
    // 	where: {
    // 		username: loginName
    // 	}
    // })
    // .then(function(data) {
    // 	var dat = JSON.parse(JSON.stringify(data));
    // console.log(dat);
    //  res.redirect("userpage/" + data.name)
    // 	// })



});
