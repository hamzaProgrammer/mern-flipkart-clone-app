const express = require('express');
const router = express.Router();
const {
    createProduct,
    getAllProducts,
    DeleteProduct,
    getSingleProducts,
    updateProduct,
    getMyCateProducts
} = require('../controllers/productController')


// create Products
router.post('/products/create', createProduct)

// all Products
router.get('/products/allProducts', getAllProducts)

// get products according to Category
router.get('/products/allCateProducts/:id', getMyCateProducts)

// all single Product
router.get('/products/getSingleProduct/:id', getSingleProducts)

// all Products
router.delete('/products/deleteProducts/:id', DeleteProduct)

// updating Product
router.put('/products/updateProduct/:id', updateProduct)

module.exports = router;