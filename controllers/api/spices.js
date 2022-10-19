const Spice = require('../../models/Spice')

const createSpice = (req, res) => {
  Spice.create(req.body, (error, createdSpice) => {
  res.redirect('/spices')
  console.log('Spice Created')
})
}

const editSpice = (req, res) => {
  Spice.findOne({
    _id: req.params.id
  }, (error, foundSpice) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      })
    } else {
      res.render('spices/edit', { spice: foundSpice });
    }
  })
}

module.exports = { createSpice }