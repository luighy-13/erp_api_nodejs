
import mysqlConnection  from '../config/database'

export const User  = {
  tableName: 'users',
  fields: [
    'id',
    'name',
    'email'
  ]
}