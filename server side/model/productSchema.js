const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        orgPrice: {
           type: Number
        },
        marktPrice: {
            type: Number
        },
        quantity: {
            type: Number,
            required: true
        },
        offer: {
            type : String,
        },
        desc: {
            type: String,
            required: true
        },
        sizes: {
            type: Array,
        },
        status: {
            type: String,
            required: true
        },
        brand: {
            type: String,
        },
        productPictures : [],
        reviews : [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
                review: String
            }
        ],
        parentCate: {
            type: String,
            required: true
        },
        subCate: {
            type: String,
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        updatedAt: Date
    },
    {
        timestamps: true
    }
);


const products = mongoose.model('Products', productSchema);

module.exports = products