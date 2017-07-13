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
			include:{
				model: db.Meal
			}
		}).then(function(data) {
			var hbsObject = {
				users: data,
				meal: data
			}
			console.log(hbsObject)
			res.render("userpage", hbsObject)
		});
	});



/////show input page
	app.get("/input", function(req, res){
		res.render("input")
	});


	app.post("/input", function(req, res){
		db.Meal.create({
			meal_name: req.body.recipeName,					
			ingredient1: req.body.ingredient1
			// ingredient2: req.body.ingredient2
			// ingredient3: req.body.ingredient3
			// ingredient4: req.body.ingredient4
			// ingredient5: req.body.ingredient5
			// ingredient6: req.body.ingredient6
			// ingredient7: req.body.ingredient7
			// ingredient8: req.body.ingredient8
			// ingredient9: req.body.ingredient9
			// ingredient10: req.body.ingredient10
				}).then(function(data){
					var hbsObject = {
						meal: data
					}
					res.redirect("input", hbsObject);
					res.end()
				});
	})
}




