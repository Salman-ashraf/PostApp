import { Button, CardActions, IconButton } from '@mui/material'
import React from 'react'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { addReaction } from './postSlice';
import { useDispatch } from 'react-redux';

const Reactions = ({post}) => {
    const dispatch=useDispatch()
    const handleClick=(e)=>{
        console.log(e.target.name)
      
    }
 
  return (
   <>
   {!post?<h1>Loading...</h1>:

   

       <CardActions>
       <IconButton name='like' onClick={()=> dispatch(addReaction({id:post.id,react:'like'}))} id='like' >
           <ThumbUpOffAltIcon/>
           {post.reactions['like']}
        </IconButton>


        <IconButton aria-label="add to favorites" name='love' id='love' onClick={()=> dispatch(addReaction({id:post.id,react:'love'}))} >
          <FavoriteBorderIcon />
          {post.reactions['love']}
        </IconButton>

        <IconButton name='haha' id='haha' onClick={()=> dispatch(addReaction({id:post.id,react:'haha'}))} >
           <InsertEmoticonIcon/>
           {post.reactions['haha']}
        </IconButton>


        <IconButton name='dislike' id='dislike' onClick={()=> dispatch(addReaction({id:post.id,react:'dislike'}))} >
           <ThumbDownOffAltIcon/>
           {post.reactions['dislike']}
        </IconButton>

      

    

      </CardActions>}
   </>
  )
}

export default Reactions