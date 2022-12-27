import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Autocomplete, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost, deletePost, getPostByPostId, updatePost } from './postSlice';
import { selectAllUsers } from '../user/userSlice';
import { useNavigate, useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const theme = createTheme();


export default function EditPost() {
    const navigate=useNavigate();

    const user=useSelector(selectAllUsers)
    const {postid}=useParams();
    const post=useSelector((state)=>getPostByPostId(state,Number(postid)))

  
// console.log(user)


    
     const [newpost,setNewpost]=React.useState({title:'',content:'',userId:''});
      console.log('useeff')
     React.useEffect(() => {
      if(post)
      setNewpost({title:post.title,content:post.body,userId:post.userId})
     }, [post])
     
    
    const handleChanges=(e)=>{
        setNewpost(prev=>{
            return {...prev,[e.target.name]:e.target.value}
        })
  
    }
    const handledelete=()=>{
        dispatch(deletePost({id:post.id}))
        navigate('/');
    }

    const dispatch=useDispatch()


    const handleupdate=()=>{
          dispatch(updatePost({id:post.id,title:newpost.title,body:newpost.content,userId:newpost.userId,reactions:post.reactions}))
          setNewpost({title:'',content:'',userId:''})
          navigate(`/post/${post.id}`);
    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <EditIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Post
          </Typography>
         
          <Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
              value={newpost.title}
              onChange={handleChanges}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
              rows={4}
              name="content"
              label="Content"
              value={newpost.content}
              onChange={handleChanges}
            />
         


<Select 
    fullWidth
    label="User"
    
    value={newpost.userId}
    onChange={(e)=>setNewpost(prev=>{return{...prev,userId:e.target.value}})}
    
  >
     {user.map(item=>(<MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>))}
    </Select>
            <Button
              type="submit"
              fullWidth
           
            
              variant="contained"
              onClick={handleupdate}
              sx={{ mt: 3, mb: 2 }}
            >
             Update Post
            </Button>

            <Button
              type="submit"
              fullWidth
              color='error'
              variant="contained"
              onClick={handledelete}
              sx={{ mt: 3, mb: 2 }}
            >
             Delete Post
            </Button>
         
          </Box>
        </Box>
  
      </Container>
    </ThemeProvider>
  );
}

