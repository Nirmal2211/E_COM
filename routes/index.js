var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');
var category = require('../controller/categorycontroller');
var product = require('../controller/productcontroller');
// ============user==================
router.post('/add_user',user.Add_User);
router.get('/view_user',user.View_User);
router.get('/view_user/:id',user.View_User);
router.get('/update_user/:id',user.Update_User);
router.get('/delete_user/:id',user.Delete_User);
router.get('/login_user',user.Login_User);
router.get('/logout_user',user.Logout_user);

// ==========category================
router.post('/add_category',category.Add_Category)
router.get('/view_category',category.View_Category);
router.get('/view_category/:id',category.View_Category);

// ============product================
router.post('/add_product',product.Add_Product);
router.get('/view_product',product.View_Product);
router.get('/view_product/:id',product.View_Product);

module.exports = router;
