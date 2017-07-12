var bcrypt = require("bcrypt-nodejs");
module.exports = function(sequelize, DataTypes) {
    sequelize.authenticate().then(function(errs) {
        if (errs) { console.log("errors: " + errs) } });
    var User = sequelize.define("User", {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING
            },
            sex: {
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
            }
        }, {

            timestamps: false,
            hooks: {
                beforeCreate: function(user, options, cb) {
                    user.password = bcrypt.hashSync(
                        user.password,
                        bcrypt.genSaltSync(10),
                        null
                    )
                }
            }
            //});
        })
        // Class Method
    User.associate = function(models) {
            User.hasMany(models.Meal, {
                onDelete: "cascade"
            })
        },
        User.prototype.validPassword = function(password) {
            return bcrypt.compareSync(password, this.password)
        }

    return User;
}
