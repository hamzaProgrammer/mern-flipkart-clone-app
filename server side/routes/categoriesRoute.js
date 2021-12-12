const express = require('express');
const router = express.Router();
const {
    createCategeory,
    getAllCategories,
    getAllOfCategories,
    DeleteCategory,
    updateCategory,
    getSingleCategory,
    getAllSubcategories,
    getSubCategory,
    addSubCategory
} = require('../controllers/categoryController')


// create Category
router.post('/category/create', createCategeory)

// get  Category
router.get('/category/getOfCategories', getAllCategories)

// get All cate and sub Category
router.put('/category/addSubCategories/:id', addSubCategory)

// get All cate and sub Category
router.get('/category/getSubCategories', getAllOfCategories)

// get single sub Category
router.get('/category/getSingleCategories/:id', getSingleCategory)

// get single sub Category
//router.get('/category/getSingleSubCategories/:id', getSubCategory)

// deleting  Category
router.delete('/category/deleteCategory/:id', DeleteCategory)

// updateing parent Category
router.put('/category/upadteCategory/:id', updateCategory)

module.exports = router;