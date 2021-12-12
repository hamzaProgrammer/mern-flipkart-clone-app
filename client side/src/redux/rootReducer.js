import { combineReducers } from 'redux';

// reducers importing
import userReducer from '../reducers/userReducer'
import categoryReducer from '../reducers/cateReducer'
import prodReducer from '../reducers/prodReducer'
import BrandsReducer from '../reducers/BrandsReducer'
import cartReducer from '../reducers/cartReducer'


const rootReducer = combineReducers({
    userReducer,
    cateReducer: categoryReducer,
    prodReducer,
    BrandsReducer,
    cartReducer
});

export default rootReducer