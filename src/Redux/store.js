import { configureStore } from "@reduxjs/toolkit";
import amiguReducer from './amiguSlice'

export default configureStore({
    reducer : {
        amigurumi : amiguReducer
    }
})