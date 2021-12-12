const express = require('express');
const router = express.Router();
 const {
     addItemtoCart
} = require('../controllers/cartController')


// create Category
router.post('/cart/addProd', addItemtoCart)


module.exports = router;