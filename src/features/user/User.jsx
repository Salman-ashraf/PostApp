import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const User = ({user}) => {
  return (
<>
    <Link className='atag' to={`/user/${user.id}`}>
               <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                    
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.name}

                  />
                </ListItem>
                </Link>
</>
  )
}

export default User