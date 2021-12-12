const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        user: {
            type : mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        products: [],
        quantity: {
            type : Number,
        },
        price: {
            type : Number,
            required: true
        },
    },
    {
        timestamps: true
    }
);


const cart = mongoose.model('carts', cartSchema);

module.exports = cart