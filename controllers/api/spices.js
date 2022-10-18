const Spice = require('../../models/Spice')

Spice.create(req.body, (error, createdSpice) => {
  res.redirect('/spices')
  console.log('Spice Created')
})

module.exports = { create }