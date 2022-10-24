const Spice = require('../../models/Spice')

// Index
const spiceIndex = async (req, res) => {
  try {
      const allSpices = await Spice.findMany({
      
      });
      res.status(200).json(allSpices);
  } catch(err){
      res.status(400).json(err);
  }
};

// New -- no method


// Delete
const deleteSpice = async (req, res) => {
  Spice.deleteOne({
    _id: req.params.id
  }, (error, data) => {
    console.log(data);
    res.redirect('');
  })
}

// Update
const updateSpice = async (req, res) => {
  Spice.updateOne({
    _id: req.params.id
  }, req.body, (error, data) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      });
    } else {
      res.redirect(`/spices/${req.params.id}`);
    }
  });
}

// Create
const createSpice = (req, res) => {
  Spice.create(req.body, (error, createdSpice) => {
    res.redirect('/spices')
    if (error) {
      console.error(error);
      res.status(400).json(error)
    } else {
      console.error(error)
      res.status(201).json({
        spice: createdSpice
      })
    }
})
}

// Edit
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

// Show
const viewSpice = (req, res) => {
  Spice.findOne({ _id: req.params.id }, (error, foundSpice) => {
    res.render('spices/Show', {
      spice: foundSpice
    })
  }
)}

module.exports = { spiceIndex, newSpice, deleteSpice, updateSpice, createSpice, editSpice, viewSpice }