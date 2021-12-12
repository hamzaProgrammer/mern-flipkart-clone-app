import {
    getCategories,
    getAllOfCategories,
    deleteMyCategory,
    updateMyCategory,
    getSingleOfCategories,
    getSubCategories,
    addSubcategory
} from '../server_api/Api'
import {
    getWorkStart,
    getWorkSuccess,
    getWorkFailure,
    setAllCategories,
    setCnrtCategory,
    setSubCategories
 } from '../reducers/cateReducer'



 // adding New Sub category
export const addNewSubCategory = () => async (dispatch) => {
     dispatch(getWorkStart())
     try {
        const { data } = await getCategories();

        dispatch(getWorkSuccess(data?.categories))
    } catch (error) {
        dispatch(getWorkFailure(error))
    }
}


// getting all categories
export const gettingCategories = () => async (dispatch) => {
     dispatch(getWorkStart())
     try {
        const { data } = await getAllOfCategories();

        dispatch(setAllCategories(data?.categories))
    } catch (error) {
        dispatch(getWorkFailure(error))
    }
}

// getting all categories
export const gettingSubCategories = () => async (dispatch) => {
     dispatch(getWorkStart())
     try {
        const { data } = await getSubCategories();
        console.log("data" , data)
        dispatch(setSubCategories(data?.categories))
    } catch (error) {
        dispatch(getWorkFailure(error))
    }
}


// deleting category
export const deletingCategory = (id) => async (dispatch) => {
     dispatch(getWorkStart())
     try {
        const { data } = await deleteMyCategory(id);

        dispatch(setAllCategories(data?.categories))
    } catch (error) {
        dispatch(getWorkFailure(error))
    }
}


// updating single category
export const updateSingleCategory = (myData , id) => async (dispatch) => {
     dispatch(getWorkStart())
     try {
        const { data } = await updateMyCategory(myData , id);

        dispatch(setAllCategories(data?.categories))
    } catch (error) {
        dispatch(getWorkFailure(error))
    }
}


// updating single category
export const AddSubMyCategory = (myData , id) => async (dispatch) => {
     dispatch(getWorkStart())
     try {
        const { data } = await addSubcategory(myData , id);
        console.log("In Actions : ", data?.categories)
        dispatch(setAllCategories(data?.categories))
    } catch (error) {
        dispatch(getWorkFailure(error))
    }
}



// getting single category
export const getSingleCategory = (id) => async (dispatch) => {
     dispatch(getWorkStart())
     try {
        const { data } = await getSingleOfCategories(id);

        dispatch(setCnrtCategory(data?.gotCategory))
    } catch (error) {
        dispatch(getWorkFailure(error))
    }
}