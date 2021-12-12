const Brands = require('../model/BrandsSchema')


// Adding new Brand
const addNewBrand = async (req, res) => {
        const newBrand = new Brands({...req.body})
        try {
            await newBrand.save();
            const allBrands = await Brands.find();

            res.status(201).json({allBrands , message: ''})
        }catch (error) {
            console.log("Error in addNewBrand and error is : ", error)
        }
}


// getting all brands
const getAllBrands = async (req, res) => {
    try {
        const allBrands = await Brands.find();

        res.status(201).json({allBrands , message: ''})
    }catch (error) {
        console.log("Error in getAllBrands and error is : ", error)
    }
}


module.exports = {
    addNewBrand,
    getAllBrands
}