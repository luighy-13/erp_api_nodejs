
import env from '../../env'
const { Sequelize } = require('sequelize')
const sequalize = new Sequelize(
  env.database,
  env.database_user,
  env.database_password,
  {
    host: env.database_host,
    dialect: env.database_type
  }
)

sequalize.authenticate().then(() => {
  console.log('initialized database')
}).catch(() => {
  console.log('connection to the database could not be established ')
})

module.exports = sequalize
