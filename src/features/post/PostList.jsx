import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import PostExcerpt from './PostExcerpt'
import { getError, getStatus, selectAllPosts, selectIds } from './postSlice'




const PostList = () => {


  const postids=useSelector(selectIds)
  const postError=useSelector(getError)
  const postStatus=useSelector(getStatus)

  return (
   <>
   <Container sx={{mt:5}}>
   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {postError?
  <h1>Error Occured</h1>:
  postStatus=='fulfilled'?
  postids.map(postid=>
    (
      <Grid item xs={4} key={postid}>
      <PostExcerpt postid={postid}/>
      </Grid>
    )):
    <h2>Loading...</h2>}

  </Grid>
  
   </Container>
   </>
  )
}

export default PostList