const Spice = require('../../models/Spice')

// Index
const spiceIndex = async (req, res) => {
  try {
      const allSpices = Spice.findMany({
      
      });
      res.status(200).json(allSpices);
  } catch(err){
      res.status(400).json(err);
  }
};

// New -- no method?
router.get('/new', (req, res) => {
  res.render('spices/New');
});

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
const newSpice = (req, res) => {
  Spice.create(req.body, (error, createdSpice) => {
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

module.exports = { spiceIndex, newSpice, deleteSpice, updateSpice, editSpice, viewSpice }