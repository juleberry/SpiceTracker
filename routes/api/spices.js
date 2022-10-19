const express = require('express');
const router = express.Router();
const spicesCtrl = require('../../controllers/api/spices');

// create spice
router.post('/spices', spicesCtrl.create);

// edit spice
router.get('/spices/:id/edit', spicesCtrl.edit)



module.exports = router;