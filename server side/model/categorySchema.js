const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type : String,
            required: true,
            unique: true,
        },
        parentId: {
            type : String,
        },
        children : []
    },
    {
        timestamps: true
    }
);


const categories = mongoose.model('categories', categorySchema);

module.exports = categories