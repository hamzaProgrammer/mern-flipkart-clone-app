const express = require('express');
const router = express.Router();
const {
    addNewBrand,
    getAllBrands
} = require('../controllers/BrandsController')


// adding new brand
router.post('/brands/addNew', addNewBrand)


// getting all brands
router.post('/brands/getAll', getAllBrands)

module.exports = router;