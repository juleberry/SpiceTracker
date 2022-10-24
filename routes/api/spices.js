const express = require('express');
const router = express.Router();
const spicesCtrl = require('../../controllers/api/spices');

// index -- find
router.get('/', spicesCtrl.spiceIndex)

// new -- none
router.get('/new', spicesCtrl.newSpice);

// delete -- deleteOne
router.delete('/:id', spicesCtrl.deleteSpice)

// update -- updateOne
router.put('/', spicesCtrl.updateSpice);

// create -- create(req.body)
router.post('', spicesCtrl.createSpice);

// edit spice -- findOne
router.get('/:id', spicesCtrl.editSpice)

// show spice -- findOne
router.get('/:id', spicesCtrl.viewSpice);

module.exports = router;