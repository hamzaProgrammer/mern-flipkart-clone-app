const Users = require('../model/cartSchema')


// add product to cart
const addItemtoCart = async (req,res)=> {
    const { user , cartItems } = req.body;
    let newProd;

    const isExist = await Cart.find({user: req.body.user});

    if(isExist){

        const isItemAdded = isExist.cartItems.find(c => c.product === req.body.cartItems.product)

        if(isItemAdded) {
            newProd = await findOneAndUpdate({user: req.body.user , "cartItems.product": req.body.cartItems.product} , {
                "$set": {
                    "cartItems": {
                        ...req.body.cartItems,
                        quantity: item.quantity + req.body.cartItems.quantity
                    }
                }
            })
            res.status(201).json({message: 'Product Updated' , newProd})
        }else{
            Cart.findOneAndUpdate({user: req.body.user} , {
                "$push" : {
                    "cartItems" : req.body.cartItems
                }
            })
        }
    }else{
        newlyProduct = new Cart({user , cartItems})
        try {
            const newProduct = await newProd.save();

            res.status(201).json({message: 'Product Added' , newProduct})
        } catch (error) {
            console.log("Error in addItemtoCart and error is : ", error)
        }
    }

}


module.exports = {
    addItemtoCart
}