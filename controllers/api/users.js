const User = require('../../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const createJWT = (user) => {
  return jwt.sign(
    { user },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  )
}

// sign up
const create = (req, res) => {
  User.create(req.body, (error, createdUser) => {
    if (error) {
      console.error(error);
      res.status(400).json(error)
    } else {
      const token = createJWT(createdUser);
      res.status(201).json({
        token: token
      })
    }
  });
}

// login
const login = (req, res) => {
  User.findOne({email: req.body.email}, (error, foundUser) => {
      if (foundUser) {
        const result = bcrypt.compare(req.body.password, foundUser.password)
        if (result) {
          const token = createJWT(createdUser);
          res.status(200).json({
            token: token
          })
        } else {
          res.status(400).json({ error: "Invalid Password" });
        }
      } else {
        res.status(404).json({ error: "User does not exist" });
      }
    }
  )}

module.exports = { create, login }