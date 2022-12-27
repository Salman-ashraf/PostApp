import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
// import { selectPostsByUserId } from '../post/postSlice';
import CallToActionIcon from '@mui/icons-material/CallToAction';
const UserPosts = () => {
  const {userid}=useParams();
  // const userPosts=useSelector((state)=>selectPostsByUserId(state,userid));


  return (
   <>
      <Container sx={{mt:5}}>
      <h2>Posts</h2>
          <List>
            
   {!userPosts?<h1>Loading ... </h1>:
   userPosts.map(item=>(
     <Link className='atag' to={`/post/${item.id}` } key={item.id}>
     <ListItem>
        <ListItemAvatar>
       
          <CallToActionIcon color='inherit'/>
      
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
        />
      </ListItem>
      </Link>
   ))}

             
            </List>
            </Container>
   
   </>
  )
}

export default UserPosts