const Users = require('../model/UserSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY


// signin Up
const addNewUser = async (req, res) => {
    const { username , email , password } = req.body;

    const check = await Users.find({ $or: [ {email: email} , { username: username}]})
    if(check.length > 0 ){
        res.json({message: '*** UserName or Email Already taken ***'})
    }else{
        const hashedPassword = await bcrypt.hash(password, 12); // hashing password

        const newUser = new Users({ ...req.body , password: hashedPassword })

        try {
            const addedUser = await newUser.save();

            res.status(201).json({addedUser , message: ''})
        }catch (error) {
            console.log("Error in addNewUser and error is : ", error)
        }
    }
}


// Logging In
const LogInUser = async (req, res) => {
    const { email ,  password } = req.body

        try {
            const isUserExists = await Users.findOne({email});

            if(!isUserExists){
                return res.json({ message: "*** User Not Found ***"})
            }

            const isPasswordCorrect = await bcrypt.compare(password, isUserExists.password); // comparing password
            if (!isPasswordCorrect) {
                return res.json({
                    message: '*** Invalid Credientials ***'
                })
            }

            const token = jwt.sign({id: isUserExists._id} , JWT_SECRET_KEY , {expiresIn: '5d'}); // gentating token

            return res.json({
                myResult: isUserExists,
                message: '',
                token
            });
        } catch (error) {
            console.log("Error in getSingleRecord and error is : ", error)
        }

}



// Logging In
const getUserEmail = async (req, res) => {
    const { email } = req.body

        try {
            const isUserExists = await Users.findOne({email});
            if(isUserExists){
                return res.json({
                    message: 'User Found'
                });
            }else{
                return res.json({
                    message: ''
                });
            }
        } catch (error) {
            console.log("Error in getSingleRecord and error is : ", error)
        }

}


module.exports = {
    addNewUser,
    LogInUser,
    getUserEmail
}