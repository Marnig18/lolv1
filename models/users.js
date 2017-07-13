	

module.exports = function(sequelize, DataTypes) {
	var User  = sequelize.define("User", {
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		name:{
				type: DataTypes.STRING,
				allowNull: false
		},
		sex:{
			type: DataTypes.ENUM("male", "female")
		},
		month: {
			type: DataTypes.STRING
		},
			year: {
			type: DataTypes.INTEGER
		},
			day: {
			type: DataTypes.INTEGER
		},
			height: {
			type: DataTypes.INTEGER
		},
			weight: {
			type: DataTypes.INTEGER
		},
			BMI: {
			type: DataTypes.INTEGER
		},

		created_at: {
			type: DataTypes.DATE
		},
		}, {

		
		timestamps: false,	
	});
	
	User.associate = function(models) {
		   User.hasMany(models.Meal, {
			   onDelete: "cascade"
	    });
	};

	return User; 
}