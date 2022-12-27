import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/post/postSlice'
import userReducer from '../features/user/userSlice'
const store=configureStore({
    reducer:{
       post:postReducer,
       users:userReducer,
    }
});

export default store;