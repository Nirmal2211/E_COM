//--------urls-----------
//=== /admin 
//=== /admin/table
//=== /admikn/addcategory


var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');
var category = require('../controller/categorycontroller');
var product = require('../controller/productcontroller');

var dasboard = require('../controller/dasboardController')

router.get('/',dasboard.Index);
router.get('/table',dasboard.Simpal_table)
router.get('/addcategory',dasboard.Add_category)

// ============user==================
router.post('/add_user',user.Add_User);
router.get('/view_user',user.View_User);
router.get('/view_user/:id',user.View_User);
router.get('/update_user/:id',user.Update_User);
router.get('/delete_user/:id',user.Delete_User);
router.post('/login_user',user.Login_User);
router.post('/logout_user',user.Logout_user);

// ==========category================
router.post('/add_category',category.Add_Category)
router.get('/view_category',category.View_Category);
router.get('/view_category/:id',category.View_Category);

// ============product================
router.post('/add_product',product.Add_Product);
router.get('/view_product',product.View_Product);
router.get('/view_product/:id',product.View_Product);

module.exports = router;
