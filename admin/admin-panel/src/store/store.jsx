import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice.jsx"; 
 const store=configureStore({
    reducer:{
        Adminauth:authReducer,
    }
 })

export default store;