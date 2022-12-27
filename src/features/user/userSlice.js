import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const USERS_URL = 'http://localhost:3000/users';

const initialState={
    users:[]
}

export const fetchAllUsers=createAsyncThunk('users/fetchAllUsers',async()=>{
  try {
    const res= await axios.get(USERS_URL);

    return[...res.data];
     
  } catch (error) {
    return 'error occured in fetching users'
  }
    
})

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(fetchAllUsers.fulfilled,(state,action)=>{
        
        state.users=[...action.payload]
             
        })
    }
})



export const selectAllUsers=((state)=>state.users.users)

// export const selectUserById =((state,userid)=>state.users.users.find(item=>item.id==userid));

export default userSlice.reducer;