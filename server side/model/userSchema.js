const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type : String,
            required: true,
            unique: true,
        },
        lastname: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type : String,
            required: true,
        },
        role: {
            type: String,
            default : 'user'
        },
        contactNo: {
            type: String,
        },
        profPic: {
            type: String,
        },
    },
    {
        timestamps: true
    }
);


const Users = mongoose.model('USERS', UserSchema);

module.exports = Users