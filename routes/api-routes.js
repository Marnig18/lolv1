var path = require("path")
var db = require("../models");

module.exports = function(app) {

///Show meals on the homepage	
	app.get("/", function(req, res) {
		db.Meal.findAll({}).then(function(data) {
			var hbsObject = {
				meals: data
			};
			res.render("home", hbsObject)
		})
	});




//////show userpage
	app.get("/userpage/:email", function(req, res) {
		db.User.findOne({
			where: {
				email: req.params.email
			},
			include:[db.Meal]
		}).then(function(data) {
			console.log("DATA:" + data);

			var hbsObject = {
				user: data
			};

			res.render("userpage", hbsObject);
		});
	});



/////show input page
	app.get("/input", function(req, res){
		res.render("input")
	});




	app.post("/userpage/user", function(req, res){
		console.log("data: " + req.body.email);
		var email = req.body.email
		
		 db.User.findOne({
		 	where: {
		 		email: req.body.email
		 	}
		 }).then(function(response){
		 	console.log("response:" + response.email);
		 	res.redirect("/userpage/" + response.email);
		 })
		
      });
	

	app.post("/user/new", function(req, res){
		db.User.create({
			name: req.body.name,
			email:req.body.email,
			password: req.body.password,
			sex: req.body.sex,
			birthday:req.body.birthday,
			height: req.body.height,
			weight: req.body.weight,

		}).then(function(response){
			
			res.redirect("/userpage/" + response.email);
		})
	})

}
