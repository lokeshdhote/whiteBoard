import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducer/userReducer.jsx";


export const store = configureStore({
    reducer:{
        useReducer:userSlice,
    }
})