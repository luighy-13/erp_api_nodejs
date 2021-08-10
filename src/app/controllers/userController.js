const User = require('../models/User')

export const createUser = async (req, res) => {
  User.create({
    name: 'admin',
    password: 'admin',
    email: 'admin@example.com',
    pin_password: '791356',
    identification_user: '0001',
    users_rols_id: 1
  }).then((user) => {
    res.json(user)
  }).catch((err) => {
    res.json(err)
  })
}

export const showUsers = (req, res) => {
  User.findAll().then(users => {
    res.json(users)
  }).catch(() => {
    res.json([])
  })
}

export const deleteUser = (req, res) => { }

export const updateUser = (req, res) => { }
