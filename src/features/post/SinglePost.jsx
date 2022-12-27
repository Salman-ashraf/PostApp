import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import PostAuthor from './PostAuthor'
import { getPostByPostId } from './postSlice'

import Reactions from './Reactions'

const SinglePost = () => {
  const {postid}=useParams();
  const post=useSelector((state)=>getPostByPostId(state,Number(postid)))
   console.log(post)
  return (
    
  
    <Container>

<Card sx={{ boxShadow:'0 0.125em 0.25em rgba($scheme-invert, 0.1)'}}>
     
     <PostAuthor post={post?post:''}/>
 
       <CardMedia
         sx={{height:'500px'}}
         component="img"
         height="200"
         image={post && post.image}
         alt="Paella dish"
       />
       <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         {post?post.title:' '}
         </Typography>
         <Typography variant="body2" color="text.secondary">
         {post?post.body:' '}
         </Typography>
       </CardContent> 
       
       <Link to={`/post/editpost/${post?post.id:''}`} className='atag'>
         <Button  variant="contained" color='inherit'>Edit Post</Button>
         </Link>
       <Reactions post={post?post:''}/>
 
   
   
     </Card>

    </Container>
  )
}

export default SinglePost