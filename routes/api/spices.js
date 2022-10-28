const express = require('express'); //import express
const router  = express.Router(); 
const spiceController = require('../../controllers/api/spices');

// multer parses form data with express server
// const multer = require('multer');
// const upload = multer();

router.get('/', spiceController.getAllSpice);
// upload.none() allows newSpice to read form data
router.post('/new', spiceController.newSpice);

router.delete('/', spiceController.deleteAllSpice);

router.get('/:id/view', spiceController.getOneSpice);
// router.post('/spice/:name', spiceController.newComment);
router.delete('/:id', spiceController.deleteOneSpice);

module.exports = router;