	module.exports = function(sequelize, DataTypes) {
		var User = sequelize.define("User", {
			email: {
				type: DataTypes.STRING,
				allowNull: false
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			picture:{
				type: DataTypes.STRING,
				defaultValue:"https://placeimg.com/640/480/animals"
			},
			sex: {
				type: DataTypes.ENUM("male", "female")
			},
			birthday: {
				type: DataTypes.STRING
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

			description: {
				type: DataTypes.TEXT

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