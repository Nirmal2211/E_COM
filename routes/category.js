var express = require('express');
var router = express.Router();

var category = require('../controller/categorycontroller')

// ==========category================
router.post('/',category.Add_Category)
router.get('/nnn',category.View_Category);
// router.get('/view_category/:id',category.View_Category);

module.exports = router;