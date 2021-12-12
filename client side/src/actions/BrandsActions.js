import {
    addNewBrand
} from '../server_api/Api'
import {
    getBrandsWorkStart,
    getBrandsSuccess,
    getBrandsWorkFailure,
 } from '../reducers/BrandsReducer'



 // adding New Sub category
export const addNewMyBrand = (myData) => async (dispatch) => {
     dispatch(getBrandsWorkStart())
     try {
        const { data } = await addNewBrand(myData);

        dispatch(getBrandsSuccess(data?.allBrands))
    } catch (error) {
        dispatch(getBrandsWorkFailure(error))
    }
}
