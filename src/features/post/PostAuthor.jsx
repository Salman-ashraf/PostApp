import { Avatar, CardHeader } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../user/userSlice'
import { TimeAgo } from './TimeAgo'

const PostAuthor = ({post}) => {
    const users=useSelector(selectAllUsers)
    const author=users.find(item=>item.id===post.userId)

  return (
  <>
  
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#f1b3a4' }} aria-label="recipe" src={author && author.image}>
        {author && author.name[0]}
          </Avatar>
        }
      
        title={author ? author.name:'Unknow Author'}
         subheader={ <TimeAgo timestamp={post.date}/>}
      />
    
  </>
  )
}

export default PostAuthor