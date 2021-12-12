import {
    allProducts,
    deleteProduct,
    singleProduct,
    getCategoryWise
} from '../server_api/Api'
import {
    getProductsStart,
    getProductsSuccess,
    getProductsFailure,
    getSingleProdSuccess,
    addToUnder5KSuccess
 } from '../reducers/prodReducer'



 // getting all products
export const getAllProducts = () => async (dispatch) => {
    dispatch(getProductsStart())
    try{
        const { data } = await allProducts();
        
        dispatch(getProductsSuccess(data?.allProducts))
    }catch (error) {
        dispatch(getProductsFailure(error))
    }
}

// getting all products
export const getDeleteProducts = (id) => async (dispatch) => {
     dispatch(getProductsStart())
     try {
        const { data } = await deleteProduct(id);

        dispatch(getProductsSuccess(data?.allProducts))
    } catch (error) {
        dispatch(getProductsFailure(error))
    }
}

// getting Single products
export const getSingProd = (id) => async (dispatch) => {
     dispatch(getProductsStart())
     try {
        const { data } = await singleProduct(id);

        dispatch(getSingleProdSuccess(data?.gotProduct))
    } catch (error) {
        dispatch(getProductsFailure(error))
    }
}

// getting Single category products
export const getSinglecategoryProducts = (id) => async (dispatch) => {
     dispatch(getProductsStart())
     try {
        const { data } = await getCategoryWise(id);

        dispatch(addToUnder5KSuccess(data?.allProducts));
    } catch (error) {
        console.log("In Actions : ", error)
        dispatch(getProductsFailure(error))
    }
}