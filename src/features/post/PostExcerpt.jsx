import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import PostAuthor from './PostAuthor';
import Reactions from './Reactions';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostByPostId } from './postSlice';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostExcerpt({postid}) {

  const post=useSelector((state)=>getPostByPostId(state,postid));
  return (
    <Card sx={{ maxWidth: 345 ,boxShadow:'0 0.125em 0.25em rgba($scheme-invert, 0.1)'}}>
     
    <PostAuthor post={post}/>

      <CardMedia
        component="img"
        height="194"
        image= {post.image}
        alt="Paella dish"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      {post.body}
        </Typography>
      </CardContent> 

      <Link to={`/post/${post.id}`} className='atag'> <Button  variant="contained" color='inherit'>View Post</Button></Link>
      <Reactions post={post}/>

  
  
    </Card>

  );
}