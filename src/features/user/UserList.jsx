import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import User from './User'
import { selectAllUsers } from './userSlice'

const UserList = () => {
  const users=useSelector(selectAllUsers)
  return (
  <>
  
    <Container sx={{mt:5}}>
      <h2>User List</h2>
          <List>

    {users.map(item=>( <User key={item.id} user={item} />))
              }
             
            </List>
            </Container>
  </>
  )
}

export default UserList