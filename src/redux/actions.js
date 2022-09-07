import * as types from "./actionTypes";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// ADD TO BASKET

export const addToBasket =(item)=>({
    type:types.ADD_TO_BASKET,
    payload:item,
})

// REMOVE FROM BASKET

export const removeToBasket =(id)=>({
    type:types.REMOVE_FROM_BASKET,
    payload:id,
})



// REGISTERATION CODE

const registerStart = () => ({
    type: types.REGISTER_START,
})


const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
})


const registerError = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
})



// LOGIN CODE

const loginStart = () => ({
    type: types.LOGIN_START,
})


const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
})


const loginError = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
})




// Logout Process



const logoutStart = () => ({
    type: types.LOGOUT_START,
})


const logoutSuccess = (user) => ({
    type: types.LOGOUT_SUCCESS,
})


const logoutError = (error) => ({
    type: types.LOGOUT_FAIL,
})



// if user sign in stay at a login 

export const setuser = (user) => ({
    type: types.SET_USER,
    payload: user,
})


// REGISTER AUTH
export const registerInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(registerStart());

        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(registerSuccess(user));
            })
            .catch(error => dispatch(registerError(error.message)));
    }
}

// LOGIN AUTG


export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user));
            })
            .catch(error => dispatch(loginError(error.message)));
    }
}


// LOGOUT FUNCTION

export const logOutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart());

        auth
            .signOut((resp) => {
                dispatch(logoutSuccess());
            })
            .catch(error => dispatch(logoutError(error.message)));
    }
}