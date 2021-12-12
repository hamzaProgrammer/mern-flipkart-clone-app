const category = require('../model/categorySchema')


// creating new category
const createCategeory = async(req,res) => {
    const cat = new category({...req.body})

    try {
        if(req.body.parentId){
            cat.children = {...req.body , }
            cat.children = {$push : {children: req.body.name}}
        }
        console.log(req.body, cat)
        await cat.save();
        res.status(201).json({cat , message: 'done'})
    } catch (error) {
        console.log("Error in saving new category and error is : ",error)
        res.status(500).json({message: ''})
    }
}


// creating list of category
const createCategoryLits = (categories , parentId = null ) => async(req,res) => {
    const categoryList = [];
    let category;

    if(parentId == null ) {
        category = categories.filter(cat => cat.parentId == undefined)
    }else{
        category = categories.filter(cat => cat.parentId == parentId)
    }

    for(let cate of category){
        categoryList.push({
            _id: cate._id,
            name : cate.name,
            slug: cate.slug,
            children: createCategoryLits(categories , cate._id)
        })
    }

    return categoryList;
}


// getting all parent categories
const getAllCategories = async (req,res) => {

    try {
        const categories = await category.find({parentId: null});

        res.status(201).json({categories})
    } catch (error) {
        console.log("Error in getAllCategories and error is : ", error)
    }
}


// getting all  categories
const getAllOfCategories = async (req,res) => {

    try {
        const categories = await category.find();

        res.status(201).json({categories})
    } catch (error) {
        console.log("Error in getAllCategories and error is : ", error)
    }
}



// getting all  categories
const getAllSubcategories = async (req, res) => {

    try {
        const categories = await category.find({parentId : {$ne : null }});

        res.status(201).json({categories})
    } catch (error) {
        console.log("Error in getAllCategories and error is : ", error)
    }
}




// deleting category
const DeleteCategory = async (req,res) => {

    try {
        const delItem = await category.findByIdAndDelete(req.params.id);

        if(delItem){
            const categories = await category.find();
            res.status(201).json({categories})
        }
    } catch (error) {
        console.log("Error in getAllCategories and error is : ", error)
    }
}


// getting single  category
const getSingleCategory = async (req, res) => {

    try {
        const gotCategory = await category.find({_id: req.params.id});

        res.status(201).json({gotCategory})
    } catch (error) {
        console.log("Error in getSingleCategory and error is : ", error)
    }
}


// getting single  category
const addSubCategory = async (req, res) => {

    try {
        await category.findByIdAndUpdate({_id: req.body.parentId} , { $push: { "children": req.body.name } }, {new: true} )

        const categories = await category.find();
        res.status(201).json({categories})
    } catch (error) {
        console.log("Error in getSingleCategory and error is : ", error)
    }
}


// Updating category
const updateCategory = async (req, res) => {
    const { id } = req.params;
    //if (req.userId){
        try {
            //const gotCate = await category.findByIdAndUpdate(id , { $set: { req.body } }, {new: true} )

            const categories = await category.find();
            res.status(201).json({categories})
        } catch (error) {
            res.status(201).json({ message: '!!! Opps An Error Occured !!!' , error})
            console.log("Error in updateCategory and error is : ", error)
        }
    //}else{
        //res.status(403).json({message: "You Are Not Allowed to Update Admin!!!" })
    //}

}




module.exports = {
    createCategeory,
    getAllCategories,
    getAllOfCategories,
    DeleteCategory,
    updateCategory,
    getSingleCategory,
    getAllSubcategories,
    addSubCategory
}