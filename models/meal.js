

	module.exports = function(sequelize, DataTypes) {

		var Meal = sequelize.define("Meal", {
			meal_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			email: {
				type: DataTypes.STRING,
			},
			ingredient1: {
				type: DataTypes.STRING	
			},
			ingredient2: {
				type: DataTypes.STRING	
			},
			ingredient3: {
				type: DataTypes.STRING	
			},
			ingredient4: {
				type: DataTypes.STRING	
			},
			ingredient5: {
				type: DataTypes.STRING	
			},
			ingredient6: {
				type: DataTypes.STRING	
			},
			ingredient7: {
				type: DataTypes.STRING	
			},
			ingredient8: {
				type: DataTypes.STRING	
			},
			ingredient9: {
				type: DataTypes.STRING	
			},
			ingredient10: {
				type: DataTypes.STRING	
			},
			calories: {
				type: DataTypes.DECIMAL
			},
			fat: {
				type: DataTypes.DECIMAL
			},
			protein:{
				type: DataTypes.DECIMAL
			},
			carbs:{
				type: DataTypes.DECIMAL
			}
			},{
			
				timestamps: false
			
		});

		Meal.associate = function(models) {
		    	Meal.belongsTo(models.User, {
			        onDelete: "cascade"
	    });
	};
		return Meal;
	};








