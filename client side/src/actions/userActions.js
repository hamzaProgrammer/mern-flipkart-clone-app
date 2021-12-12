import {
    signUpUser,
    signInUser
} from '../server_api/Api'
import {
    getWorkStart,
    getWorkSuccess,
    getWorkFailure,
    getSignInSuccess,
    getUserSignInSuccess
 } from '../reducers/userReducer'



 // adding New User
export const addNewUser = (myData) => async (dispatch) => {
     dispatch(getWorkStart())
     try {
        const { data } = await signUpUser(myData);

        dispatch(getWorkSuccess(data))
    } catch (error) {
        dispatch(getWorkFailure())
    }
}


 // signing In Admin
export const LoginUser = (myData) => async (dispatch) => {
     dispatch(getWorkStart())
     try {
        const { data } = await signInUser(myData);

        dispatch(getSignInSuccess(data?.myResult))
    } catch (error) {
        dispatch(getWorkFailure())
    }
}


 // signing In User
export const LoginCommonUser = (myData) => async (dispatch) => {
     dispatch(getWorkStart())
     try {
        const { data } = await signInUser(myData);

        dispatch(getUserSignInSuccess(data?.myResult))
    } catch (error) {
        dispatch(getWorkFailure())
    }
}
