const mongoose = require("mongoose");

const BrandsSchema = new mongoose.Schema({
        name: {
            type: String
        }
    },
    {
    timestamps: true
});


const Brands = mongoose.model('Brands', BrandsSchema);

module.exports = Brands