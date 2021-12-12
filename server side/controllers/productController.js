const products = require('../model/productSchema')
const slugify = require('slugify')


// creating new products
const createProduct = async(req,res) => {

    const newProduct = new products({...req.body})

    try {
        const newlyAddedProd = await newProduct.save();

        res.status(201).json({newlyAddedProd , message: '*** Product Added SuccessFully ***'})
    } catch (error) {
        console.log("Error in saving new category and error is : ",error)
        res.status(201).json({ message: '*** Opps! Some error Occured Please try again ***'})
    }
}


// get all products
const getAllProducts = async (req, res) => {
    try {
        const allProducts = await products.find();

        res.status(201).json({allProducts})
    } catch (error) {
        console.log("Error in saving new category and error is : ",error)
        res.status(201).json({ message: '*** Opps! Some error Occured Please try again ***'})
    }
}


// delete product
const DeleteProduct = async (req, res) => {
    try {
        await products.findByIdAndDelete(req.params.id);
        const allProducts = await products.find();

        res.status(201).json({allProducts})
    } catch (error) {
        console.log("Error in DeleteProduct and error is : ", error)
        res.status(201).json({ message: '*** Opps! Some error Occured Please try again ***'})
    }
}


// getting single product
const getSingleProducts = async (req, res) => {
    try {
        const gotProduct = await products.find({_id: req.params.id});

        res.status(201).json({gotProduct})
    } catch (error) {
        console.log("Error in saving new category and error is : ",error)
        res.status(201).json({ message: '*** Opps! Some error Occured Please try again ***'})
    }
}


// Updating Product Info
const updateProduct = async (req, res) => {
    const { id } = req.params;

    //if (req.userId){
        try {
            const updatedProd = await products.findByIdAndUpdate(id ,{ $set: req.body } , {new: true} )

            res.status(201).json({updatedProd , message: ''})
        } catch (error) {
            res.status(201).json({ message: '!!! Opps An Error Occured !!!' , error})
            console.log("Error in updateProduct and error is : ", error)
        }
    //}else{
        //res.status(403).json({message: "You Are Not Allowed to Update Admin!!!" })
    //}

}


// getting product according categories
const getMyCateProducts = async (req,res) => {
    try {
        const allProducts = await products.find({category: req.params.id});

        res.status(201).json({allProducts})
    } catch (error) {
        console.log("Error in getMyCateProducts and error is : ", error)
    }
}


module.exports = {
    createProduct,
    getAllProducts,
    DeleteProduct,
    getSingleProducts,
    updateProduct,
    getMyCateProducts
}