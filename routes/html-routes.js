//grab db definition for use in route handler.
//var db = require("../models");

//Static HTML handler	
module.exports = function(app) {

		app.get("/", function(req, res){			
				res.render("welcome");
		});

		// app.post("/create", function(req, res){
		// 	db.burgers.create({burger_name: req.body.burgerName})
		// 	.then(res.redirect("/"));
		// });

		// app.put("/burger/eat/:burgId", function(req, res){//update function
		// 	var id = req.params.burgId;
		// 	db.burgers.update({//db.burgers.update calling the sequelize update function on the db.burgers table.
		// 		devoured: true
		// 	},
		// 	{	
		// 		where: {
		// 			id: id
		// 		}//sequelize knows that it's id key is not the var id lexically defined here.
		// 	}).then(function(dbPut){
		// 		res.redirect("/");
		// 	});
		// });
}
