var express = require('express');
var router = express.Router();

var dasboard = require('../controller/dasboardController')

router.get('/',dasboard.Index);
router.get('/categorytable',dasboard.Simpal_table)
router.get('/addcategory',dasboard.Addcategory)
router.get('/addproduct',dasboard.AddProduct)
router.get('/calendar',dasboard.Calendar)



module.exports = router;
