const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class User extends Model {}
User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  pin_password: DataTypes.INTEGER,
  identification_user: DataTypes.INTEGER,
  users_rols_id: DataTypes.INTEGER

}, {
  sequelize,
  modelName: 'users',
  timestamps: false

})

module.exports = User
