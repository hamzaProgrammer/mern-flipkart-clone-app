const axios = require('axios');

const API = axios.create({
    baseURL: 'http://localhost:5000'
});

// this is for using local storage in headers, otherwise it will not work
// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }

//     return req;

// });




// users Routes
const signUpUser = (data) => API.post(`/register`, data);
const signInUser = (data) => API.post(`/signin`, data);
const CheckUser = (data) => API.post(`/signin/checkUser`,data);


// categories  routes
const createCategories = (data) => API.post(`/category/create`, data);
const addSubcategory = (data, id) => API.put(`/category/addSubCategories/${id}`, data);
const getCategories = () => API.get(`/category/getCategories`);
const getAllOfCategories = () => API.get(`/category/getOfCategories`);
const getSubCategories = () => API.get(`/category/getSubCategories`);
const getSingleOfCategories = (id) => API.get(`/category/getSingleCategories/${id}`);
const getSingleSubCategories = (id) => API.get(`/category/getSingleSubCategories/${id}`);
const deleteMyCategory = (id) => API.delete(`/category/deleteCategory/${id}`);
const updateMyCategory = (data , id) => API.put(`/category/upadteCategory/${id}`, data);


// Brands routes
const addNewBrand = (data) => API.post(`/brands/addNew`, data);
const getAllBrands = () => API.get(`/brands/getAll`);

// products  routes
const addProduct = (data) => API.post(`/products/create`, data);
const allProducts = () => API.get(`/products/allProducts`);
const getCategoryWise = (id) => API.get(`/products/allCateProducts/${id}`);
const deleteProduct = (id) => API.get(`/products/deleteProducts/${id}`);
const singleProduct = (id) => API.get(`/products/getSingleProduct/${id}`);
const updateProduct = (data, id) => API.put(`/products/updateProduct/${id}`, data);



// cart  routes
const addtoCart = (data) => API.post(`/cart/addProd`, data);



module.exports = {
    signUpUser,
    signInUser,
    createCategories,
    getCategories,
    addProduct,
    addtoCart,
    getAllOfCategories,
    deleteMyCategory,
    allProducts,
    deleteProduct,
    singleProduct,
    updateProduct,
    getCategoryWise,
    updateMyCategory,
    getSingleOfCategories,
    getSubCategories,
    getSingleSubCategories,
    addSubcategory,
    addNewBrand,
    getAllBrands,
    CheckUser
}