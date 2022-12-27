import { createAsyncThunk, createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import axios from 'axios';
import { sub } from "date-fns";
import { useSelector } from "react-redux";
import userSlice from "../user/userSlice";

const POSTS_URL = "http://localhost:3000/posts";


const postAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
})

const initialState=postAdapter.getInitialState({
   status:'idle',
   error:null,
})



export const fetchAllPosts = createAsyncThunk(
    'posts/fetchAllPosts',
    async () => {
          
        try {
        
            const response = await axios.get(POSTS_URL);
            // console.log(response.data.data);
            return [...response.data]
          } catch (error) {
            return error
          }
      
    }
  )



  export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    async (intialvalue) => {

        try {
           
            const response = await axios.post(POSTS_URL,intialvalue);
            //console.log(response)
            return response.data
          } catch (error) {
            return error
          }
      
    }
  )


  export const updatePost = createAsyncThunk(
    'posts/updatePost',
    async (intialvalue) => {

        try {
            const response = await axios.put(`${POSTS_URL}/${intialvalue.id}`,intialvalue);
            console.log(response)
            return response.data
          } catch (error) {
            console.log(error)
            return error
          }
      
    }
  )


  export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async (intialvalue) => {
                     console.log(intialvalue)
        try {
            const response = await axios.delete(`${POSTS_URL}/${intialvalue.id}`,intialvalue);
            console.log(response.data)
            // return response.data //delete is returing response so for try
            return intialvalue;
          } catch (error) {
            console.log(error)
            return error
          }
      
    }
  )




const postSlice=createSlice({
    name:'post',
    initialState,
    reducers: {
        addReaction:(state,action)=>{
            const {id,react}=action.payload;
            // const exist=state.Posts.find(item=>item.id==id)
            const exist=state.entities[id]
            if(exist)
            {
                exist.reactions[react]++;
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllPosts.pending, (state, action) => {
            state.status='pending'
            
          }),
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.status='fulfilled'
            let min=1;
            const loadedposts=action.payload.map(item=>{
               item.date=sub(new Date(),{minutes:min++}).toISOString()
             
                item.reactions={
                    like:0,
                    love:0,
                    haha:0,
                    dislike:0
                }

                return item
            })
            // state.Posts=[...loadedposts]
            postAdapter.upsertMany(state,loadedposts);
            
          }),
          builder.addCase(fetchAllPosts.rejected, (state, action) => {
            state.status='rejected'
            state.error=action.payload
            
          }),
          builder.addCase(updatePost.fulfilled, (state, action) => {
           action.payload.date=new Date().toISOString()
          // const filteredpost=state.Posts.filter(item=>item.id!==action.payload.id);
          //  state.Posts=[...filteredpost,action.payload];
          postAdapter.upsertOne(state,action.payload);
       
          }),

          builder.addCase(deletePost.fulfilled, (state, action) => {   
          //  const filteredpost=state.Posts.filter(item=>item.id!==action.payload.id);
            // state.Posts=[...filteredpost];
            postAdapter.removeOne(state,action.payload.id)
           }),

          builder.addCase(addNewPost.fulfilled, (state, action) => {
            action.payload.date=new Date().toISOString()
            action.payload.reactions={

              like:0,
              love:0,
              haha:0,
              dislike:0
          }
          //  state.Posts.push(action.payload)
          postAdapter.addOne(state,action.payload);
           })

    }
})



export default postSlice.reducer

export const {
  selectAll:selectAllPosts,
  selectById:getPostByPostId,
  selectIds,
} = postAdapter.getSelectors(state => state.post);


export const {addReaction}=postSlice.actions;

//  export const selectAllPosts=(state=>state.post)

export const getStatus=(state=>state.post.status)
export const getError=(state=>state.post.error)

// export const getPostByPostId=((state,postid)=>state.post.Posts.find(item=>item.id==postid))
// export const selectPostsByUserId=((state,userId)=>state.post.Posts.filter(item=>item.userId==userId));

